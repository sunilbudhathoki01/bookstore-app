import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Freebook = () => {
	const [book,setBook]=useState([]);
	useEffect(()=>{
		const getBook=async()=>{
			try {
				const res=await axios.get("http://localhost:5000/book")
				const data=res.data.filter((data) => data.category === "Free")
				setBook(data)
				console.log(data)
			} catch (error) {
				console.log("error",error)
			}
			
		}
		getBook()
	})
	

	// adjusted settings: slidesToScroll should be <= slidesToShow (or 1)
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
				<div>
					<h1 className="font-semibold text-xl pb-2">Free Ordered Book</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
						molestiae, deleniti dolor ut optio officiis laboriosam officia repellat
						dicta? Porro, explicabo? Exercitationem pariatur voluptatum unde aut est
						obcaecati dolorum quis!
					</p>
				</div>

				<div>
					{/* {loading ? (
						<p>Loading...</p>
					) : book.length === 0 ? (
						<p>No free books found.</p>
					) : ( */}
						<Slider {...settings}>
							{book.map((item) => (
								<Cards item={item} key={item.id} />
							))}
						</Slider>
					{/* )} */}
				</div>
			</div>
		</>
	);
};

export default Freebook;
