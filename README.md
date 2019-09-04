# codesoft
query:{
  products{
  name,
  id
    category{
      id,
      name
    }
  }
}
result:
{
  "data": {
    "products": [
      {
        "name": "Lamp",
        "id": "24111",
        "category": {
          "id": "13471",
          "name": "Homeware"
        }
      },
      {
        "name": "sofa",
        "id": "99559",
        "category": {
          "id": "38014",
          "name": "Homeware"
        }
      }
    ]
  }
}