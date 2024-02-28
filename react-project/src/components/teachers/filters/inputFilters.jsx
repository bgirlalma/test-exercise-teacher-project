import { LiaDollarSignSolid } from "react-icons/lia";
import { DownVectorSvg } from "../../image/down-vector";
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
import { useState } from "react";


const FilterTeacher = () => {
  const [isOpenSelectLanguages, setIsOpenSelectLanguages] = useState(false);
  const [iseOpenSelectLevel, setIsOpenSelectLevel] = useState(false)
  const [isOpenSelectPrice, setIsOpenSelectPrice] = useState(false)

  const handleFocus = (e) => {
    e.target.blur()
  }
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
                <StyledList>English</StyledList>
                <StyledList>Spanish</StyledList>
                <StyledList>German</StyledList>
                <StyledList>Polish</StyledList>
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
                <StyledList>A1 Beginner</StyledList>
                <StyledList>A2 Elementary</StyledList>
                <StyledList>B1 Intermediate</StyledList>
                <StyledList> B2 Upper-Intermediate</StyledList>
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
                <StyledList>
                  5 <LiaDollarSignSolid />
                </StyledList>
                <StyledList>
                  10 <LiaDollarSignSolid />
                </StyledList>
                <StyledList>
                  15 <LiaDollarSignSolid />
                </StyledList>
                <StyledList>
                  30 <LiaDollarSignSolid />
                </StyledList>
              </DropdownList>
            )}
          </DropdownContainer>
        </WrappFormContainer>
      </div>
    );
}

export default FilterTeacher;