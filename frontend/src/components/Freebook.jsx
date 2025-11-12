import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const Freebook = () => {
	// fetch list.json from public folder at runtime
	const [filterData, setFilterData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/list.json")
			.then((res) => {
				if (!res.ok) throw new Error("Failed to load list.json");
				return res.json();
			})
			.then((data) => {
				setFilterData(data.filter((d) => d.category === "Free"));
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => setLoading(false));
	}, []);

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
					{loading ? (
						<p>Loading...</p>
					) : filterData.length === 0 ? (
						<p>No free books found.</p>
					) : (
						<Slider {...settings}>
							{filterData.map((item) => (
								<Cards item={item} key={item.id} />
							))}
						</Slider>
					)}
				</div>
			</div>
		</>
	);
};

export default Freebook;
