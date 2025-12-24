import { Formik, Form } from "formik";
import * as Yup from  "yup";
import { HeroInfo } from "./HeroInfo"
import { HeroItem } from "./HeroItem";
import Button from "react-bootstrap/Button";
import { MyInput } from "./MyInput";

export const HeroList = ({randomHeroes, isInfoOpened, selectedHero, chooseHero, 
    uploadAdditionalHeroes, showMoreBtn, findHero
}) => {
    return (
        <>
        <div className="findHeroform">
<Formik
      initialValues={{ heroName: ''}}
    validationSchema={Yup.object({
        heroName: Yup.string().required("This field must be filled!")
    })}
      onSubmit={(values, {resetForm}) => {
        findHero(values);
        resetForm()
      }}
    >
        <Form>
            <MyInput label="" name='heroName' placeholder='enter name of the hero...'/>
          <button type="submit" className="btn btn-outline-success btn-sm" id="findHeroBtn">
            Find
          </button>
        </Form>
    </Formik>
        </div>
        <div className="heroListContainer">
        <div className="heroList">
            {randomHeroes.length  ? randomHeroes.map((item, idx) => 
            <HeroItem key={item.id || idx} randomHero={item} chooseHero={chooseHero}
            selectedHero={selectedHero}/>) : null}
        </div>
        <HeroInfo selectedHero={selectedHero} isOpened={isInfoOpened} />
        </div>
        <div className="showMoreHeroes">
            {showMoreBtn ? <Button onClick={uploadAdditionalHeroes}>
                More heroes
            </Button> : null}
        </div>
        </>
    )
}