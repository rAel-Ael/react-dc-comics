import comics from "../data/comics";
import Card from "./Card";
function Content() {
    return <>
        <main>
            <div className="container">
                <div className="card">
                    <ul>
                        {comics.map(serie => {
                        return <li key={serie.id}> 
                                <Card serie= {serie}>

                                </Card>

                            </li>
                        })}
                    </ul>

                </div>

            </div>
        </main>
    </>
}
export default Content