import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddProduct = () => {
    const onSubmit = (data) => {
        fetch('https://safe-sands-77688.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Product Added Successfully!",
                        text: "Thank You!",
                        icon: "success",
                        button: "Ok",
                    });
                    reset()

                }
            })
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div className='mt-5 mb-3'>
            <h2>Add A New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className="col-md-12">
                        <input className='w-50 m-3' placeholder="Product Name" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}


                    </div>
                    <div className="col-md-12">
                        <input className='w-50 m-3' placeholder="Product Price" type="number" {...register("price", { required: true })} />
                        {errors.price && <span>This field is required</span>}

                    </div>
                    <div className="col-md-12">
                        <input className='w-50 m-3' placeholder="Product Image Link" {...register("img", { required: true })} />
                        {errors.img && <span>This field is required</span>}


                    </div>
                    <div className="col-md-12">
                        <input className='w-50 m-3' placeholder="Product Rating" type="number"{...register("rating", { min: 0, max: 5 }, { required: true })} />
                        {errors.rating && <span>{errors.message}</span>}


                    </div>
                    <div className="col-md-12">
                        <input className='w-50 m-3' placeholder="Product Color" {...register("color", { required: true })} />
                        {errors.color && <span>This field is required</span>}


                    </div>
                    <div className="col-md-12">
                        <input className='w-50 m-3' placeholder="Product Materials" {...register("material", { required: true })} />
                        {errors.material && <span>This field is required</span>}

                    </div>
                    <div className="col-md-12">


                        <input className='w-50 m-3' placeholder="Product Category" {...register("category", { required: true })} />
                        {errors.category && <span>This field is required</span>}


                    </div>
                    <div className="col-md-12">
                        <input className='w-50 m-3' placeholder="Product InStock" type="number" {...register("stock", { required: true })} />
                        {errors.stock && <span>This field is required</span>}

                    </div>


                </div>

                <input type="submit" value='ADD' />
            </form>

        </div>
    );
};

export default AddProduct;