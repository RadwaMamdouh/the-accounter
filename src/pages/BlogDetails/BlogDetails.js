import Page from "components/Page/Page";
import { Link, useParams } from "react-router-dom";
import blogsItems from "json/blogsData.json";
import SubscribeBlog from "components/SubscribeBlog/SubscribeBlog";
import styles from "./BlogDetails.module.css";

const BlogDetails = () => {
	const { id } = useParams();

	// find blog by id (convert id to number)
	const blog = blogsItems.find((item) => item.id === Number(id));

	return (
		<Page title={`Blog | ${blog.title}`}>
			<div className="py-8 lg:py-[50px]">
				<div className="container">
					<div className="flex items-center justify-start gap-[10px] mb-6">
						<Link
							to="/blogs"
							className="text-sm text-muted transition-all duration-300 hover:text-dark hover:underline hover:decoration-primary hover:underline-offset-4">
							Blog
						</Link>
						<span className="text-sm font-medium text-muted">/</span>
						<p className="text-sm font-medium text-dark">{blog.breadcrumb}</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-12 mb-6 lg:mb-8">
						<div>
							<h1 className="text-xl lg:text-[32px] lg:leading-relaxed font-bold text-dark mb-1">
								{blog.title}
							</h1>
							<p className="text-sm text-muted">Posted on {blog.date}</p>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-12 items-start">
						<div>
							<div className="w-full max-w-full h-[168px] lg:h-[450px] rounded-lg flex items-center justify-center overflow-hidden mb-8">
								<img
									src={blog.image}
									alt="Blog Pic"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-start gap-3 mb-8">
								<Link
									to=""
									target="_blank"
									className="shrink-0 py-2 px-3 min-w-[108px] bg-white flex items-center justify-start gap-[6px] border border-border-light rounded-md transition-all duration-300 hover:bg-ghost-white">
									<img
										src="/images/facebook.svg"
										alt="Facebook"
										className="shrink-0 w-[22px] h-[22px]"
									/>
									<span className="text-[13px] font-semibold text-dark capitalize">
										Share
									</span>
								</Link>
								<Link
									to=""
									target="_blank"
									className="shrink-0 py-2 px-3 min-w-[108px] bg-white flex items-center justify-start gap-[6px] border border-border-light rounded-md transition-all duration-300 hover:bg-ghost-white">
									<img
										src="/images/twitter.svg"
										alt="Twitter"
										className="shrink-0 w-[22px] h-[22px]"
									/>
									<span className="text-[13px] font-semibold text-dark capitalize">
										Tweet
									</span>
								</Link>
								<Link
									to=""
									target="_blank"
									className="shrink-0 py-2 px-3 min-w-[108px] bg-white flex items-center justify-start gap-[6px] border border-border-light rounded-md transition-all duration-300 hover:bg-ghost-white">
									<img
										src="/images/linkedin.svg"
										alt="Linkedin"
										className="shrink-0 w-[22px] h-[22px]"
									/>
									<span className="text-[13px] font-semibold text-dark capitalize">
										Share
									</span>
								</Link>
								<Link
									to=""
									target="_blank"
									className="shrink-0 py-2 px-3 min-w-[108px] bg-white flex items-center justify-start gap-[6px] border border-border-light rounded-md transition-all duration-300 hover:bg-ghost-white">
									<img
										src="/images/link.svg"
										alt="Copy"
										className="shrink-0 w-[22px] h-[22px]"
									/>
									<span className="text-[13px] font-semibold text-dark capitalize">
										Copy
									</span>
								</Link>
							</div>
							<div
								dangerouslySetInnerHTML={{ __html: blog.content }}
								className={styles.blog_content}
							/>
						</div>
						<SubscribeBlog />
					</div>
				</div>
			</div>
		</Page>
	);
};

export default BlogDetails;
