import { LiaDollarSignSolid } from 'react-icons/lia';
import { DownVectorSvg } from '../../image/down-vector';
import {
  WrappFormContainer,
  FormContainerLanguages,
  Label,
  InputLanguages,
  FormContainerLevel,
  InputLevel,
  FormContainerPrice,
  InputPrice,
  IconWrapp,
  DropdownContainer,
  DropdownList,
  StyledList,
} from './inputFilter.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/teacher/filterSlice';

const FilterTeacher = () => {
  //work with filter "languages, level, price"
  const dispatch = useDispatch();
  const languages = useSelector(state => state.languages)
  

  //work with select
  const [isOpenSelectLanguages, setIsOpenSelectLanguages] = useState(false);
  const [iseOpenSelectLevel, setIsOpenSelectLevel] = useState(false);
  const [isOpenSelectPrice, setIsOpenSelectPrice] = useState(false);

  //dispatch filter
  const handleLanguges = () => {
    dispatch(setFilter({ languages: languages }));
  };
  console.log("Languages", languages)

  const handleLevel = level => {
    dispatch(setFilter({ level: level }));
  };

  const handlePrice = price => {
    dispatch(setFilter({ price: price }));
  };

  //прибираємо фокус з селекта
  const handleFocus = e => {
       e.target.blur();
  };
  return (
    <div>
      <WrappFormContainer>
        <DropdownContainer>
          <FormContainerLanguages>
            <Label htmlFor="languages">Languages</Label>
            <InputLanguages
              type="text"
              name="languages"
              placeholder="English"
              onClick={() => setIsOpenSelectLanguages(!isOpenSelectLanguages)}
              onFocus={handleFocus}
            />
            {/* пропс який не додається в DOM $isOpen, але стилізується */}
            <IconWrapp $isOpen={isOpenSelectLanguages}>
              <DownVectorSvg />
            </IconWrapp>
          </FormContainerLanguages>
          {isOpenSelectLanguages && (
            <DropdownList>
              <StyledList onClick={() => handleLanguges('English')}>
                English
              </StyledList>
              <StyledList onClick={() => handleLanguges('Spanish')}>
                Spanish
              </StyledList>
              <StyledList onClick={() => handleLanguges('German')}>
                German
              </StyledList>
              <StyledList onClick={() => handleLanguges('Polish')}>
                Polish
              </StyledList>
            </DropdownList>
          )}
        </DropdownContainer>

        <DropdownContainer>
          <FormContainerLevel>
            <Label htmlFor="level">Level of knowledge</Label>
            <InputLevel
              type="text"
              name="level"
              placeholder="A1 Beginner"
              onClick={() => setIsOpenSelectLevel(!iseOpenSelectLevel)}
              onFocus={handleFocus}
            />
            {/* пропс який не додається в DOM $isOpen, але стилізується */}
            <IconWrapp $isOpen={iseOpenSelectLevel}>
              <DownVectorSvg />
            </IconWrapp>
          </FormContainerLevel>
          {iseOpenSelectLevel && (
            <DropdownList>
              <StyledList onClick={() => handleLevel('A1 Beginner')}>
                A1 Beginner
              </StyledList>
              <StyledList onClick={() => handleLevel('A2 Elementary')}>
                A2 Elementary
              </StyledList>
              <StyledList onClick={() => handleLevel('B1 Intermediate')}>
                B1 Intermediate
              </StyledList>
              <StyledList onClick={() => handleLevel(' B2 Upper-Intermediate')}>
                B2 Upper-Intermediate
              </StyledList>
            </DropdownList>
          )}
        </DropdownContainer>

        <DropdownContainer>
          <FormContainerPrice>
            <Label htmlFor="price">Price</Label>
            <InputPrice
              type="text"
              name="price"
              placeholder="Price"
              onClick={() => setIsOpenSelectPrice(!isOpenSelectPrice)}
            />
            {/* пропс який не додається в DOM $isOpen, але стилізується */}
            <IconWrapp $isOpen={isOpenSelectPrice}>
              <DownVectorSvg />
            </IconWrapp>
          </FormContainerPrice>
          {isOpenSelectPrice && (
            <DropdownList>
              <StyledList onClick={() => handlePrice(5)}>
                5 <LiaDollarSignSolid />
              </StyledList>
              <StyledList onClick={() => handlePrice(10)}>
                10 <LiaDollarSignSolid />
              </StyledList>
              <StyledList onClick={() => handlePrice(15)}>
                15 <LiaDollarSignSolid />
              </StyledList>
              <StyledList onClick={() => handlePrice(30)}>
                30 <LiaDollarSignSolid />
              </StyledList>
            </DropdownList>
          )}
        </DropdownContainer>
      </WrappFormContainer>
    </div>
  );
};

export default FilterTeacher;
