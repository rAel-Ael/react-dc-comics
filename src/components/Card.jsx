
function Card(props) {
    const { serie } = props
    return <>
        <div>
            <img src={serie.thumb} alt="" />
            <p>{serie.series}</p>
        </div>
    </>
}
export default Card