

function CollectionCard(props){

	const images = props.collection.preview_photos;
	const title = props.collection.title;
	const numberOfPhotos = props.collection.total_photos;
	const currator = props.collection.user.name;
	const tags = props.collection.tags;
	const url = props.collection.links.html;
	const tagsToRender = tags.map(
		tag=> <div key={tag.title} className="tag">{tag.title}</div>
	).slice(0,3);

	const imagesToRender = images.map(
		(image, index)=>{ 
			let classType = '';
			switch(index){
				case 0:
					classType = 'firstPreviewImage';
					break;
				case 1:
					classType = 'secondPreviewImage';
					break;
				case 2:
					classType = 'thirdPreviewImage';
					break;
				default:
					classType = '';
					break;	

			}
			return	(  <img 
					src={image.urls.small}
					key={image.urls.small}
					className= {classType}
				/>)}
	).slice(0,3);
	return(
		
			<div className="collectionCard" 
				 onClick={()=>window.open(url)}
			>
				<div className="collectionPicsDiv">
					{imagesToRender}
				</div>
				<h2>{title}</h2>
				<p>{numberOfPhotos} photos . Curated by {currator}</p>
				<div className='collectionTags'>
					{tagsToRender}
				</div>
			</div>
		
	);
}

export { CollectionCard }