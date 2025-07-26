
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../../Routes/Shared/Footer/MenuItem/MenuItem';
import useMenu from '../../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu,setMenu] = useState([]);
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //        const popularItems = data.filter(item => item.category === 'popular') 
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className="mb-12 px-4 md:px-8 lg:px-16">
            <SectionTitle heading="POPULAR ITEMS" subHeading="From Our Menu" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {popular.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <div className="text-center mt-6">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </section>

    );
};

export default PopularMenu;




