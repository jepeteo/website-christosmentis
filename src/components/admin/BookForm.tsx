'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Trash2, Upload } from 'lucide-react'
import { bookFormSchema, type BookFormData } from '@/lib/validations/schemas'
import { slugifyTitle } from '@/lib/books/slugify'
import {
  createBook,
  updateBook,
  uploadCover,
} from '@/lib/admin/actions'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Card } from '@/components/ui/Card'

interface BookFormProps {
  initialData?: BookFormData & { id?: string }
  mode: 'create' | 'edit'
}

const defaultValues: BookFormData = {
  title: '',
  slug: '',
  genre: 'crime',
  seriesSlug: '',
  position: undefined,
  cover: '',
  logline: '',
  description: '',
  excerpt: '',
  isbn: '',
  format: '',
  pages: undefined,
  publishDate: new Date().toISOString().split('T')[0],
  purchaseLinks: [{ label: '', url: '' }],
  tags: [],
  published: true,
}

export function BookForm({ initialData, mode }: BookFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [slugEdited, setSlugEdited] = useState(mode === 'edit')
  const [tagsDraft, setTagsDraft] = useState(() =>
    (initialData?.tags ?? defaultValues.tags).join(', ')
  )

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: initialData ?? defaultValues,
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'purchaseLinks',
  })

  const cover = watch('cover')
  const title = watch('title')

  const parseTags = (value: string) =>
    value
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)

  const syncTagsFromDraft = () => {
    setValue('tags', parseTags(tagsDraft), { shouldValidate: true })
  }

  const handleTitleBlur = () => {
    if (!slugEdited && title) {
      setValue('slug', slugifyTitle(title))
    }
  }

  const handleCoverUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)
      const result = await uploadCover(formData)
      setValue('cover', result.url, { shouldValidate: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const onSubmit = async (data: BookFormData) => {
    setError(null)

    try {
      const tags = parseTags(tagsDraft)
      setValue('tags', tags)

      const payload = {
        ...data,
        tags,
        seriesSlug: data.seriesSlug || undefined,
        excerpt: data.excerpt || undefined,
        isbn: data.isbn || undefined,
        format: data.format || undefined,
        purchaseLinks: data.purchaseLinks.filter(
          (link) => link.label.trim() && link.url.trim()
        ),
      }

      if (mode === 'create') {
        await createBook(payload)
        router.push('/admin/books')
      } else if (initialData?.id) {
        await updateBook(initialData.id, payload)
        router.push('/admin/books')
      }

      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <Card className="space-y-4 p-6">
        <h2 className="font-display text-xl text-cm-headline">Basic info</h2>

        <div>
          <label className="mb-2 block text-sm text-cm-muted">Title</label>
          <Input
            {...register('title')}
            onBlur={handleTitleBlur}
            placeholder="The Dividend Code"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-400">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm text-cm-muted">Slug</label>
          <Input
            {...register('slug', {
              onChange: () => setSlugEdited(true),
            })}
            placeholder="the-dividend-code"
          />
          {errors.slug && (
            <p className="mt-1 text-sm text-red-400">{errors.slug.message}</p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-cm-muted">Genre</label>
            <select
              {...register('genre')}
              className="flex h-11 w-full rounded border border-cm-divider bg-cm-surface px-4 text-cm-body"
            >
              <option value="crime">Crime</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-cm-muted">Publish date</label>
            <Input type="date" {...register('publishDate')} />
            {errors.publishDate && (
              <p className="mt-1 text-sm text-red-400">
                {errors.publishDate.message}
              </p>
            )}
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm text-cm-body">
          <input type="checkbox" {...register('published')} className="h-4 w-4" />
          Published (visible on the public site)
        </label>
      </Card>

      <Card className="space-y-4 p-6">
        <h2 className="font-display text-xl text-cm-headline">Cover</h2>

        <div>
          <label className="mb-2 block text-sm text-cm-muted">Cover URL</label>
          <Input
            {...register('cover')}
            placeholder="/images/books/cover.jpg or uploaded URL"
          />
          {errors.cover && (
            <p className="mt-1 text-sm text-red-400">{errors.cover.message}</p>
          )}
        </div>

        <div>
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-cm-primary">
            <Upload className="h-4 w-4" />
            {uploading ? 'Uploading...' : 'Upload cover image'}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverUpload}
              disabled={uploading}
            />
          </label>
          <p className="mt-1 text-xs text-cm-muted">
            Requires BLOB_READ_WRITE_TOKEN. You can also paste an existing path.
          </p>
        </div>

        {cover && (
          <div className="relative h-48 w-32 overflow-hidden rounded border border-cm-divider">
            <Image
              src={cover}
              alt="Cover preview"
              fill
              className="object-cover"
              unoptimized={cover.startsWith('http')}
            />
          </div>
        )}
      </Card>

      <Card className="space-y-4 p-6">
        <h2 className="font-display text-xl text-cm-headline">Marketing copy</h2>

        <div>
          <label className="mb-2 block text-sm text-cm-muted">Logline</label>
          <Textarea {...register('logline')} rows={2} />
          {errors.logline && (
            <p className="mt-1 text-sm text-red-400">{errors.logline.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm text-cm-muted">Description</label>
          <Textarea {...register('description')} rows={6} />
          {errors.description && (
            <p className="mt-1 text-sm text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm text-cm-muted">Excerpt (optional)</label>
          <Textarea {...register('excerpt')} rows={3} />
        </div>
      </Card>

      <Card className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl text-cm-headline">Purchase links</h2>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ label: '', url: '' })}
          >
            <Plus className="mr-1 h-4 w-4" />
            Add link
          </Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <Input
              {...register(`purchaseLinks.${index}.label`)}
              placeholder="Buy Kindle eBook"
            />
            <Input
              {...register(`purchaseLinks.${index}.url`)}
              placeholder="https://amazon.com/..."
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </Card>

      <Card className="space-y-4 p-6">
        <h2 className="font-display text-xl text-cm-headline">Series & details</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-cm-muted">Series slug (optional)</label>
            <Input {...register('seriesSlug')} placeholder="killer-mind" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-cm-muted">Position in series</label>
            <Input type="number" min={0} {...register('position')} />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-cm-muted">ISBN</label>
            <Input {...register('isbn')} />
          </div>
          <div>
            <label className="mb-2 block text-sm text-cm-muted">Format</label>
            <Input {...register('format')} placeholder="Kindle eBook" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-cm-muted">Pages</label>
            <Input type="number" min={1} {...register('pages')} />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-cm-muted">
            Tags (comma-separated)
          </label>
          <Input
            value={tagsDraft}
            onChange={(e) => setTagsDraft(e.target.value)}
            onBlur={syncTagsFromDraft}
            placeholder="thriller, crime fiction"
          />
        </div>
      </Card>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting || uploading}>
          {isSubmitting ? 'Saving...' : mode === 'create' ? 'Create book' : 'Save changes'}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.push('/admin/books')}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
