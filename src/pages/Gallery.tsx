
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import { useScaleClipPath } from "../hooks/useGSAPAnimations";

const Gallery = () => {

  const service6BannerRef = useScaleClipPath(0.5);
  return (
    <Layout variant='gallery'>

        <div
        ref={service6BannerRef}
        className="w-full max-sm:py-10 pb-20 pt-44">
           <Banner variant="variantsix" dataKey="Common"
           className="h-fit!" /> 
        </div>
    </Layout>
  )
}

export default Gallery