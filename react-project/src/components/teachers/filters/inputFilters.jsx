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
  DropdownList,
  StyledList,
} from "./inputFilter.styled";


const FilterTeacher = () => {
    return (
      <div>
        <WrappFormContainer>
          <div>
            <FormContainerLanguages>
              <Label htmlFor="languages">Languages</Label>
              <InputLanguages type="text" name="languages" />
              <IconWrapp>
                <DownVectorSvg />
              </IconWrapp>
            </FormContainerLanguages>
            <DropdownList>
              <StyledList>English</StyledList>
              <StyledList>Spanish</StyledList>
              <StyledList>German</StyledList>
              <StyledList>Polish</StyledList>
            </DropdownList>
          </div>

          <div>
            <FormContainerLevel>
              <Label htmlFor="level">Level of knowledge</Label>
              <InputLevel type="text" name="level" />
              <IconWrapp>
                <DownVectorSvg />
              </IconWrapp>
            </FormContainerLevel>
            <DropdownList>
              <StyledList>A1 Beginner</StyledList>
              <StyledList>A2 Elementary</StyledList>
              <StyledList>B1 Intermediate</StyledList>
              <StyledList> B2 Upper-Intermediate</StyledList>
            </DropdownList>
          </div>

          <div>
            <FormContainerPrice>
              <Label htmlFor="price">Price</Label>
              <InputPrice type="text" name="price" />
              <IconWrapp>
                <DownVectorSvg />
              </IconWrapp>
            </FormContainerPrice>
            <DropdownList>
              <StyledList>5 <LiaDollarSignSolid/></StyledList>
              <StyledList>10 <LiaDollarSignSolid/></StyledList>
              <StyledList>15 <LiaDollarSignSolid/></StyledList>
              <StyledList>30 <LiaDollarSignSolid/></StyledList>
            </DropdownList>
          </div>
        </WrappFormContainer>
      </div>
    );
}

export default FilterTeacher;