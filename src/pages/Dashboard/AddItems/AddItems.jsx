import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hoisting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axisoSecure = useAxiosSecure();

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
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axisoSecure.post('/menu', menuItem);
            console.log('with image url', menuRes.data)

            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        } catch (error) {
            console.error('Image upload failed:', error);
        }
    }

    return (
        <div className="px-4 md:px-0">
            <SectionTitle heading="ADD AN ITEM" subHeading="What's new?" />
            <div className="bg-base-100 p-4 rounded-lg shadow max-w-screen-md mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Recipe Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name')}
                            className="input input-bordered w-full"
                        />
                    </label>

                    {/* Category & Price */}
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select
                                defaultValue="Default"
                                {...register('category')}
                                className="select select-bordered w-full"
                            >
                                <option disabled value="Default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        {/* Price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price')}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Recipe Details */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea
                            {...register('recipe')}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details"
                        />
                    </label>

                    {/* Image Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Upload Image</span>
                        </label>
                        <input
                            {...register('image')}
                            type="file"
                            className="file-input w-full max-w-xs"
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="btn btn-primary flex items-center gap-2 mt-4">
                        Add Item <FaUtensils />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
