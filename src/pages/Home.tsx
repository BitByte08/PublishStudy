import MainLayout from "@/layouts/MainLayout";
import Banner from "@/components/ui/Home/Banner"
import Manu from "@/components/ui/Home/Manu"
const Home = () => {
    return (
        <MainLayout>
            <div>
                <Banner />
                <Manu />
            </div>
            <div>
                
            </div>
        </MainLayout>
    )
}

export default Home