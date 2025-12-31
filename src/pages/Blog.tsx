import Banner from "../components/Banner"
import Layout from "../components/Layout"
import { useScaleClipPath } from "../hooks/useGSAPAnimations";

const Blog = () => {

  const service6BannerRef = useScaleClipPath(0.5);


  return (
    <Layout variant='blog'>
       <div
       ref={service6BannerRef}
       className="w-full max-sm:py-10 py-20 pt-44">
  <Banner variant="variantsix" dataKey="Common" /> 
  </div>
    </Layout>
  )
}

export default Blog