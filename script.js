body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: #111;
    color: white;
    text-align: center;
}


header {
    background: #ff9800;
    padding: 20px;
    font-size: 28px;
    font-weight: bold;
    color: black;
}


.card {
    background: #222;
    margin: 20px auto;
    padding: 20px;
    width: 90%;
    max-width: 450px;
    border-radius: 15px;
    box-shadow: 0 0 15px #ff9800;
}


h2 {
    color: #ff9800;
}


h3 {
    color: #00ff66;
}


input, select {
    width: 90%;
    padding: 12px;
    margin: 8px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
}


button {
    background: #00c853;
    color: white;
    padding: 12px 25px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
}


button:hover {
    background: #00ff66;
}


p {
    font-size: 17px;
}


@media screen and (max-width:600px) {

    header {
        font-size: 22px;
    }

    .card {
        width: 85%;
    }

}
