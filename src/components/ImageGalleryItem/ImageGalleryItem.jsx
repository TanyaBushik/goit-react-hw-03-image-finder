import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} onClick={onClick} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
// export class ImageGalleryItem extends Component {
//   state = {
//     searchItem: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevItem = prevProps.gallerySearchItem;
//     const currentItem = this.props.gallerySearchItem;

//     if (prevItem !== currentItem) {
//       fetch(
//         `https://pixabay.com/api/?q={this.props.gallerySearchItem}&page=1&key=35569629-68d598aa8a27ce1f99985e42c&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(response => response.json())
//         .then(searchItem => this.setState({ searchItem }));
//     }
//   }

//   render() {
//     return (
//       <li className="gallery-item">
//         {this.state.searchItem && <div>{this.state.searchItem.tags}</div>}
//         <img src="" alt="" />
//       </li>
//     );
//   }
// }
