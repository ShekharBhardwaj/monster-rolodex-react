import Card from "../card/card.component";
import "./card-list.style.css"

const CardList = (props) => {
    const {monsters} = props;
    return (
        <div className={"card-list"} key={"card-list-div"}>
            {monsters.map(
                (monster) => {
                    return (
                        <Card monster={monster} key={monster.id}/>
                    );
                }
            )

            }
        </div>
    );
}

export default CardList;