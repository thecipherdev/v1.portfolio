import type { BlogPost } from '@/types/blog.types';

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={post.url}
      className="group flex items-center gap-4 rounded-md border border-border-subtle p-4 transition-all duration-200 hover:border-border-default hover:bg-canvas-elevated"
      target="_blank"
    >
      <div
        className="hidden h-14 w-20 shrink-0 rounded-sm sm:block"
        style={{ backgroundColor: post.thumbnailColor }}
      />

      <div className="flex-1 min-w-0">
        <p className="font-dm-sans text-[13px] font-medium text-text-primary truncate">
          {post.title}
        </p>
        <p className="mt-1 font-dm-mono text-[9px] text-text-tertiary">
          {post.readTime} · {post.date} · {post.platform}
        </p>
      </div>
      <span className="shrink-0 text-text-tertiary transition-colors group-hover:text-text-primary">
        ↗
      </span>
    </a>
  );
}

export default BlogCard;
