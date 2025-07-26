import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hoisting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`
const UpdateItem = () => {
  const {name,category,recipe,price,_id} = useLoaderData();
  const { register, handleSubmit,reset } = useForm();
  const axisoSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  
   const onSubmit = async (data) => {
          const formData = new FormData();
          formData.append('image', data.image[0]);
      
          try {
              const res = await axiosPublic.post(image_hosting_api, formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
              });
              const menuItem = {
                  name : data.name,
                  category :data.category,
                  price: parseFloat(data.price),
                  recipe: data.recipe,
                  image: res.data.data.display_url
              }
              const menuRes = await axisoSecure.patch(`/menu/${_id}`,menuItem);
              console.log('with image url',menuRes.data)
  
              if(menuRes.data.modifiedCount> 0){
                  reset();
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${data.name} is updated to the menu`,
                      showConfirmButton: false,
                      timer: 1500
                    });
              }
              console.log('Image upload response:', res.data);
          } catch (error) {
              console.error('Image upload failed:', error);
          }
      } 

  return (
    <div>
      <SectionTitle heading="Update Item" subHeading="Refresh Info" />
     <div>
                     <form onSubmit={handleSubmit(onSubmit)}>
                         <label className="form-control w-full my-6 ">
                             <div className="label">
                                 <span className="label-text">Recipe Name</span>
                             </div>
                             <input type="text"
                             defaultValue={name}
                                 placeholder="Recipe Name"
                                 {...register('name')}
                                 className="input input-bordered w-full " />
     
                         </label>
                         <div className='flex gap-6'>
                             {/* Category */}
                             <label className="form-control w-full my-6 ">
                                 <div className="label">
                                     <span className="label-text">Category</span>
     
                                 </div>
                                 <select defaultValue={category}
                                  {...register('category')}
                                     className="select select-bordered w-full ">
                                     <option disabled value="Default">Select a Category</option>
                                     <option value="salad">Salad</option>
                                     <option value="soup">Soup</option>
                                     <option value="pizza">Pizza</option>
                                     <option value="dessert">Dessert</option>
                                     <option value="drinks">Drinks</option>
     
                                 </select>
     
                             </label>
                             {/* Price */}
                             <label className="form-control w-full my-6 ">
                                 <div className="label">
                                     <span className="label-text">Price</span>
     
                                 </div>
                                 <input type="number"
                                 defaultValue={price}
                                     placeholder="Price"
                                     {...register('price')}
                                     className="input input-bordered w-full " />
     
                             </label>
     
     
                         </div>
                         {/* Recipe Area */}
                         <label className="form-control">
                             <div className="label">
                                 <span className="label-text">Recipe Details</span>
     
                             </div>
                             <textarea {...register('recipe')}
                              className="textarea textarea-bordered h-24" defaultValue={recipe} placeholder="Recipe Details"></textarea>
     
                         </label>
                         <div className='form-control w-full my-6'>
                             <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
                         </div>
                     <button className='btn'
                     >Update menu Item </button>
                     </form>
                 </div>
    </div>
  );
};

export default UpdateItem;