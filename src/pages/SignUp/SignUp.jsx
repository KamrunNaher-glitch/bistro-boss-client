import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit,reset, formState: { errors }, } = useForm();
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                  const userInfo = {
                    name : data.name,
                    email: data.email
                  }
                  axiosPublic.post('/users',userInfo)
                  
                  .then(res =>{
                    if(res.data.insertedId){
                      console.log('user added to the database')
                      reset();
                      Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'User created successfully.',
                          showConfirmButton: false,
                          timer: 1500
                      });
                      navigate('/');
                    }
                  })
                    // console.log('user profile info updated')
                   

                })
                .catch(error => console.log(error))
        })
};
  
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>

      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Join the Bistro Boss Family! <br />
              Create an account and unlock the full flavor of Bistro Boss.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("PhotoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
                {errors.PhotoURL && <span className="text-red-600">PhotoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' {...register("email")} placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password'{...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <span className="text-red-600">Password must be 6 characters</span>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />

              </div>
            </form>
            <p className="p-4"><small>Already Have an account? <Link to="/Login">Please Login</Link> </small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

