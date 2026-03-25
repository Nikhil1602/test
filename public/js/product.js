const onSubmitHandler = (event) => {
    event.preventDefault();
    const product = event.target.productName.value;
    const obj = {
        "productName": product
    }

    axios.post("http://localhost:4000/products", obj).then(res => {
        console.log(res.data);
    });
}
