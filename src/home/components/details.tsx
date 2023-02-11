import { useState } from "react";
import { Button } from "reactstrap";

export default function Details(props: any) {
    const [name, setName] = useState(props.name);
    setTimeout(() => {
        setName(props.name+" - " + parseInt((Math.random()*10).toFixed(1)).toString())
    }, 1000);
    return (
        <div className="bg-success">
            <h5>{name}</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem assumenda, illo quae esse laborum eaque aspernatur doloremque architecto ut praesentium animi ullam ipsum. Quo illum dicta cumque molestiae. Iusto ipsa voluptatibus corrupti modi repudiandae hic rerum officiis! Et error reiciendis dolor asperiores animi enim saepe voluptates eligendi facilis odit, commodi neque est odio esse omnis tempore laborum aut, unde voluptate possimus illo voluptatem vitae nesciunt? Repellendus, suscipit culpa eaque sunt dolores aspernatur aliquid! Nostrum voluptatum quibusdam culpa vitae ducimus dolorem! Totam corporis tempore quasi excepturi ab dicta quae itaque, suscipit necessitatibus assumenda veniam asperiores maiores obcaecati est, incidunt, magnam quia.</p>
        </div>
    )
}