

function CollectionCard(props){

	console.log(props.collection);
	const images = props.collection.preview_photos;
	const imagesToRender = images.map(
		image=> <img 
					src={image.urls.small}
					key={image.urls.small}
					className='prewievImage'
				/>
	).slice(0,3);
	return(
		<div className="collectionCard">
			<div className="collectionPicsDiv">
				{imagesToRender}
			</div>
			<h2>collectionName</h2>
			<p>photos currated</p>
			<div className='collectionTags'>
				tags
			</div>
        </div>
	);
}

export { CollectionCard }