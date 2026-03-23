import BlogCard from '@components/common/BlogCard';
import SectionLabel from '@components/common/SectionLabel';

import { blogPosts } from '@mock/blogs';

import FadeIn from '../animations/FadeIn';

function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-[900px] px-6">
        <FadeIn delay={0.3}>
          <SectionLabel label="recent writing" />
        </FadeIn>
        <div className="space-y-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
