import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastConfig } from 'services/utils';
import { BsSearch } from 'react-icons/bs';
import { Search } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    gallerySearchItem: '',
  };

  handleSearchInput = event => {
    this.setState({
      gallerySearchItem: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.gallerySearchItem.trim() === '') {
      toast.error('Enter a valid query', toastConfig);
      return;
    }

    this.props.handleSearchSubmit(this.state.gallerySearchItem);
    this.setState({ gallerySearchItem: '' });
  };

  render() {
    return (
      <Search>
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <BsSearch value={{ style: { marginRigth: 8, padding: 3 } }} />
            {/* <span className="button-label">Search</span> */}
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="gallerySearchItem"
            value={this.state.gallerySearchItem}
            onChange={this.handleSearchInput}
          />
        </form>
      </Search>
    );
  }
}
