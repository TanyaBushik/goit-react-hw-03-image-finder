import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { toastConfig } from 'services/utils';
export class App extends Component {
  state = {
    gallerySearchItem: '',
  };

  componentDidMount() {}

  handleSearchSubmit = gallerySearchItem => {
    this.setState({ gallerySearchItem });
  };

  render() {
    return (
      <div>
        <Searchbar handleSearchSubmit={this.handleSearchSubmit} />
        <ImageGalleryItem gallerySearchItem={this.state.gallerySearchItem} />
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}
