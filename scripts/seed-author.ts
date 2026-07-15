import { config } from 'dotenv'

config({ path: '.env.local' })

async function seedAuthor() {
  const { randomUUID } = await import('crypto')
  const { eq } = await import('drizzle-orm')
  const { hashPassword } = await import('better-auth/crypto')
  const { db } = await import('../src/lib/db')
  const { account, user } = await import('../src/lib/db/auth-schema')

  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  const name = process.env.ADMIN_NAME || 'Christos Mentis'

  if (!email || !password) {
    throw new Error(
      'ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env.local'
    )
  }

  if (password.length < 8) {
    throw new Error('ADMIN_PASSWORD must be at least 8 characters')
  }

  const [existing] = await db
    .select()
    .from(user)
    .where(eq(user.email, email))
    .limit(1)

  if (existing) {
    console.log(`Author account already exists for ${email}`)
    return
  }

  const userId = randomUUID()
  const hashedPassword = await hashPassword(password)
  const now = new Date()

  await db.insert(user).values({
    id: userId,
    name,
    email,
    emailVerified: true,
    createdAt: now,
    updatedAt: now,
  })

  await db.insert(account).values({
    id: randomUUID(),
    accountId: email,
    providerId: 'credential',
    userId,
    password: hashedPassword,
    createdAt: now,
    updatedAt: now,
  })

  console.log(`Author account created: ${email}`)
}

seedAuthor().catch((error) => {
  console.error(error)
  process.exit(1)
})
