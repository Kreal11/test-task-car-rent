import React from 'react';
import {
  CatalogItem,
  ChooseCarButton,
  CuttedBrandWrapper,
  ImgWrapper,
  ItemButton,
  ItemHeaderWrapper,
  ItemTagsList,
  SpannedWrapper,
} from '../oneCar/OneCar.styled';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/favoritesSlice';
import { SvgSymbols } from '../../images/svg/SvgSymbols';
import { toast } from 'react-toastify';

export const FavoriteCar = ({ favoriteCar }) => {
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites?.some(
    favorite => favorite.id === favoriteCar.id
  );

  const addressParts = favoriteCar.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const { isOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const handleFavoriteClick = car => {
    if (isFavorite) {
      dispatch(removeFromFavorites(car));
      toast.info('Successfully removed from favorites');
    } else {
      dispatch(addToFavorites(car));
      toast.success('Successfully added to favorites');
    }
  };

  return (
    <CatalogItem key={favoriteCar.id}>
      <ImgWrapper>
        <img src={favoriteCar.img} alt="Car" crossOrigin="anonymous"></img>
        <SvgSymbols />
        <ChooseCarButton
          type="button"
          onClick={() => handleFavoriteClick(favoriteCar)}
        >
          {isFavorite ? (
            <svg width={18} height={18}>
              <use xlinkHref="#icon-active" />
            </svg>
          ) : (
            <svg width={18} height={18}>
              <use xlinkHref="#icon-normal" />
            </svg>
          )}
        </ChooseCarButton>
      </ImgWrapper>
      <div>
        <ItemHeaderWrapper>
          <div>
            <CuttedBrandWrapper>{favoriteCar.make}</CuttedBrandWrapper>{' '}
            <SpannedWrapper>
              <span>{favoriteCar.model},</span>
            </SpannedWrapper>
            <div>{favoriteCar.year}</div>
          </div>
          <h5>{favoriteCar.rentalPrice}</h5>
        </ItemHeaderWrapper>
        <ItemTagsList>
          <li>{city}</li>
          <li>{country}</li>
          <li>{favoriteCar.rentalCompany}</li>
          <li>{favoriteCar.type}</li>
          <li>{favoriteCar.model}</li>
          <li>{favoriteCar.id}</li>
          <li>{favoriteCar.accessories[0]}</li>
        </ItemTagsList>
      </div>
      <ItemButton type="button" onClick={openModal}>
        Learn more
      </ItemButton>
      {isOpen ? (
        <Modal
          closeModal={closeModal}
          car={favoriteCar}
          city={city}
          country={country}
        />
      ) : null}
    </CatalogItem>
  );
};
