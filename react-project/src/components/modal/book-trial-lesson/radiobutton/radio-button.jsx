
import { GroupRadioButton, RadioButtonContainer, LabelRadioButton, FieldBookLesson } from "./radio-button.styled";
export const RadioButton = () => {
    return (
      <GroupRadioButton>
        <RadioButtonContainer>
          <LabelRadioButton>
            <FieldBookLesson type="radio" name="radio-group" value="1" />
            Career and business
          </LabelRadioButton>
          <LabelRadioButton>
            <FieldBookLesson type="radio" name="radio-group" value="2" />
            Lesson for kids
          </LabelRadioButton>
          <LabelRadioButton>
            <FieldBookLesson type="radio" name="radio-group" value="3" />
            Living abroad
          </LabelRadioButton>
          <LabelRadioButton>
            <FieldBookLesson type="radio" name="radio-group" value="4" />
            Exams and coursework
          </LabelRadioButton>
          <LabelRadioButton>
            <FieldBookLesson type="radio" name="radio-group" value="5" />
            Culture, travel or hobby
          </LabelRadioButton>
        </RadioButtonContainer>
      </GroupRadioButton>
    );
}