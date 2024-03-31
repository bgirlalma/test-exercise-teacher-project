import FilterTeacher from './filters/inputFilters';
import TeachersItems from './teacher-items/teacher-items';

const Teachers = () => {
  return (
    <div>
      <FilterTeacher />
      <TeachersItems />
    </div>
  );
};

export default Teachers;
