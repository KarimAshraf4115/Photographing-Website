import { useParams } from "react-router-dom"
import data from '../../../posts.json'
import BlogDetails from "../../Components/BlogDetails/BlogDetails";
export default function ArticleDetailsPage() {
    const {slug} = useParams();
    const post = data.posts.find(post => post.slug === slug)
    return (
    <>
      <BlogDetails post = {post}/>
    </>
  )
}
