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
} from './OneCar.styled';
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

export const OneCar = ({ car }) => {
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites?.some(favorite => favorite.id === car.id);

  const dispatch = useDispatch();

  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const { isOpen, openModal, closeModal } = useModal();

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
    <CatalogItem key={car.id}>
      <ImgWrapper>
        <img src={car.img} alt="Car" crossOrigin="anonymous"></img>
        <SvgSymbols />
        <ChooseCarButton type="button" onClick={() => handleFavoriteClick(car)}>
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
            <CuttedBrandWrapper>{car.make}</CuttedBrandWrapper>{' '}
            <SpannedWrapper>
              <span>{car.model},</span>
            </SpannedWrapper>
            <div>{car.year}</div>
          </div>
          <h5>{car.rentalPrice}</h5>
        </ItemHeaderWrapper>
        <ItemTagsList>
          <li>{city}</li>
          <li>{country}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>id: {car.id}</li>
        </ItemTagsList>
      </div>
      <ItemButton type="button" onClick={openModal}>
        Learn more
      </ItemButton>
      {isOpen ? (
        <Modal
          closeModal={closeModal}
          car={car}
          city={city}
          country={country}
        />
      ) : null}
    </CatalogItem>
  );
};
