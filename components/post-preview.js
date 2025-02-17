import Link from "next/link";
import Avatar from "../components/avatar";
import Author from "../components/author";
import DateComponent from "../components/date";
import CoverImage from "./cover-image";

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<div className="pb-5 mb-5 rounded shadow-2xl">
			<div className="mb-5 ">
				<CoverImage title={title} slug={slug} url={coverImage.url} />
			</div>
			<div className="px-5 md:min-h-[50%] flex flex-col justify-between">
				<div>
					<h3 className="text-2xl lg:text-3xl mb-3 leading-snug">
						<Link href={`/pagina/${slug}`}>
							<a className="flex items-center sm:hover:text-purple-900 gap-2 underline underline-offset-8 sm:underline-offset-8">
								{title}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 hidden md:block lg:block"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
									/>
								</svg>
							</a>
						</Link>
					</h3>
					<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
				</div>
				{author && (
					<div className="flex gap-5 py-5">
						<Avatar picture={author.picture} />
						<div>
							<Author name={author.name} />
							<DateComponent dateString={date} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
