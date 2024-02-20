// import { LiaDollarSignSolid } from "react-icons/lia";
import { DownVectorSvg } from "../../image/down-vector";


const FilterTeacher = () => {
    return (
      <div>
        <div>
          <form>
            <label htmlFor="languages">Languages</label>
            <select name="languages" id="select-languages">
              <option value="French">French</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="German">German</option>
            </select>
            <div>
              <DownVectorSvg />
            </div>

            <label htmlFor="level">Level of knowledge</label>
            <select name="level" id="select-level">
              <option value="Beginner"> A1 Beginner</option>
              <option value="Elementary">A2 Elementary</option>
              <option value="Intermediate">B1 Intermediate</option>
              <option value="Upper-Intermediate">B2 Upper-Intermediate</option>
            </select>
            <div>
              <DownVectorSvg />
            </div>

            <label htmlFor="price">Price</label>
            <select name="price" id="select-price">
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
            <div>
              <DownVectorSvg />
            </div>
          </form>
        </div>
      </div>
    );
}

export default FilterTeacher;