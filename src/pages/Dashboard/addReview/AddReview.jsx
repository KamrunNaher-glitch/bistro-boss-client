import { useState } from "react";
import Swal from "sweetalert2";

const AddReview = () => {
  const [review, setReview] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(review); // You can POST this to your server
    Swal.fire({
      icon: "success",
      title: "Thank you for your review!",
      showConfirmButton: false,
      timer: 1500,
    });
    setReview({ name: "", rating: "", comment: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-base-200 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={review.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <select
          name="rating"
          value={review.rating}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="" disabled>
            Select Rating
          </option>
          <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
          <option value="4">⭐⭐⭐⭐ (Good)</option>
          <option value="3">⭐⭐⭐ (Average)</option>
          <option value="2">⭐⭐ (Poor)</option>
          <option value="1">⭐ (Terrible)</option>
        </select>
        <textarea
          name="comment"
          value={review.comment}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Write your review..."
          rows="4"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
