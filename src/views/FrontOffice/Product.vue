<template>
    <Navbar /><main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
                <div class="container d-flex align-items-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="#">Produits</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Par défaut</li>
                    </ol>

                    <nav class="product-pager ml-auto" aria-label="Product">
                        <a class="product-pager-link product-pager-prev" href="#" aria-label="Previous" tabindex="-1">
                            <i class="icon-angle-left"></i>
                            <span>Précédent</span>
                        </a>

                        <a class="product-pager-link product-pager-next" href="#" aria-label="Next" tabindex="-1">
                            <span>Suivant</span>
                            <i class="icon-angle-right"></i>
                        </a>
                    </nav><!-- End .pager-nav -->
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->

            <div class="page-content">
                <div class="container">
                    <div class="product-details-top">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="product-gallery product-gallery-vertical">
                                    <div class="row">
                                        <figure class="product-main-image">
                                            <img id="product-zoom" src="https://staticecp.uprinting.com/8289/530x530/New_X_Banner_Stands.jpg" data-zoom-image="assets/images/products/single/1-big.jpg" alt="product image">

                                            <a href="#" id="btn-product-gallery" class="btn-product-gallery">
                                                <i class="icon-arrows"></i>
                                            </a>
                                        </figure><!-- End .product-main-image -->

                                        <div id="product-zoom-gallery" class="product-image-gallery">
                                            <a class="product-gallery-item active" href="#" data-image="assets/images/products/single/1.jpg" data-zoom-image="assets/images/products/single/1-big.jpg">
                                                <img src="https://staticecp.uprinting.com/8289/530x530/New_X_Banner_Stands.jpg" alt="product side">
                                            </a>

                                            <a class="product-gallery-item" href="#" data-image="assets/images/products/single/2.jpg" data-zoom-image="assets/images/products/single/2-big.jpg">
                                                <img src="https://staticecp.uprinting.com/8289/530x530/New_X_Banner_Stands.jpg" alt="product cross">
                                            </a>

                                            <a class="product-gallery-item" href="#" data-image="assets/images/products/single/3.jpg" data-zoom-image="assets/images/products/single/3-big.jpg">
                                                <img src="https://staticecp.uprinting.com/8289/530x530/New_X_Banner_Stands.jpg" alt="product with model">
                                            </a>

                                            <a class="product-gallery-item" href="#" data-image="assets/images/products/single/4.jpg" data-zoom-image="assets/images/products/single/4-big.jpg">
                                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFhUWGBUWFxYWFxYYFhgXGBUXGBcVFxcYHSggGBolGxUWIjEhJSorLy4uFyAzODMtNygtLisBCgoKDg0OGxAQGzIlICYvLS0vLS0tLy0tLy0tKy01MDA1LS0tLS8tLy01LS01LS0tLS0tLS8tLS0tLTUtLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABMEAACAQIDBAYDDQQIBAcAAAABAgADEQQSIQUxQVEGEyJhcZGBobEUIzIzQmJyc4KywdHwBzRS4RVDU4OSk7PUJGOj8RclNUSEorT/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAC8RAAIBAgMFBwUBAQEAAAAAAAABEQIDBCExBRJBUYETImFxobHBMpHR4fAUUgb/2gAMAwEAAhEDEQA/AO4xEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERLTV1G9h5wC7Ewqm0UHM+A/OWW2ryXzMAk5j1sSiFFd1Uu2VASAWbKWyqDvNlJsORkZU2m/MDwH5zRdu3xmNp3dsuCamwIbfWezkEfNpqv+bAOqxKQb6yqAIiIAiYW1lBoVAWdbowzU7510PaTLrmG8WljZWOLUaZdlLlFLMAUBNhchWAK332IuIBKRMY4ocx5y1VxwA3r+vTMwDOiRY2lzZR6R+JmHS2wTWVS65TSLE9m2YFBa9/nHSYgxJsESExO0xcAVkG/5afnMZtrDMB16f5i28gZmBJK4vaAp1KNNgffmZFbSwZULhT4hWt4TPmn7Yx9l61MQjGktRxSHVt1jhCUAuSVa40y/wAR3za6FUOqupurAMDzBFwfXMGS7ERAEREAREQBERAEREA510eNSmKqtUqMDiMUVDE6ZcTVplR3di48ZPI8xHpWNbKPi8TUU/3qU6/tqHzmSsAuiemUI88Z4BZxmKWlTeq5sqKzseQUXJ8hIbYmDZaNM1BarVZq9TiQ9S7Zb8coKr4KJX0kHWNQwv8AbPmqfUUbPU9DN1aeFQyUq6uPAwDZtntemh+aB5afhMmYGx2vTtyJH4/jM+AIiIBEdKj/AMJVtyH3hOWio3d5Gda2yoNBwRcWGh8RIvD7HwzqGFFbEX4+kb5hVre3eMSZdD3d7oc4NV+7/D/OW2L/AKWdOOwcN/Yr5t+cgtp4CmlQoEAvk6vU9m+jce4zrbo3nBwu3HbUx/Q4/Bpfb5mw39nd3HlJropQ6/sVtxD2v2b60stud7HylnaxRRTAFszrm369rU6nkBLuz2OZr3vrktuvelbd9v0zr2CmP7Mj/wCl7spLn9oyXjLZK4nY2GV8rMFsdfhHzlxNiYXrFUHNprY9m1t9/wCc82m5FWrcA6gEkXsSN4lvGoc4VL6IOFiQBqbeEz2NLjP+yMPE1JvLR+PNr46aEpsvZWFZlemnwXFiQRqD375JdCuzhFonfh2q4bfc5aFRqdMnxpqjfalGx6istMoLAEC3IjeD+uMr2L2MXjqV/hPRxAHIVKK0tPFsM58SZHrUVNEy25pTmfInoiJqbiIiAIiIAiIgCIiAa2iD3RjqQ3lcNiP8SNSH/wCUiWJnOQu0lH9thX9Puesn+6MxK9PKxHIkQAolWWeoZi7Yx3UUKla1yiEheLNuRR3liB6YBF7M99xeIxHyUthaXgnarMPGoQv91Jc/C9H4zH2LgRQoU6W8qvaP8Tsc1Rj3lyx9MygNYBK7Ef4Q8D7f5SVkJslrVLcwR+P4SbgCIiAYW2PiX8B7RIXYGJ0KH6Q/Efrvkt0g/dqv0fxE07Z+LylXHDf7CPKVuLu9jfor4RD8p/n5oscNa7TD1U+PrBuRMhNoMGqE5ASlhe5vv3gXsdTJdXBAI1B1HpmudJMatE5qmVQfgtex0Go7z+UmYiq5TSnbmfDj6P28OJEs0UVOK468Pb3Ne6T4YNUpqFIBYhitzx3nfaZPRGi4qMF7ZRmVc9jYAIc19NRr5yB2j0iz1qPVMxQt752GBAuN4t47ryb6G45nqVDSs3aqML6Ar73ffbiwnB3MRPGPDWN5+sR0OqtYeFkp4TETuz9p9ciexdQXJNNQ97PpcNyJlzDIevUFUBAsCu62XQSjE4WoTrYu5vYW0teMVRekbUADU3jNYDvvqOF5m27+8nU3CX3+rKOLhKdIyMV02EopSlvXlpnOqUtx+icweGVCMoAuRewA9ksqAu0jzq4Vf+hWb/cyvZ+MWplCujMCuYKwNjxvY6SzjdNqYXvwmOHlWwJk1kWEskbBERMAREQBERAEREAREQCC252cTgqn/NqUWPJalB2H/wB6VMSra9Kz3/iA8xp7LSjpmLYVqt7dQ9HEE/No1kqP6CiuD3GZu16d0Dcj6j+hAImnIjbK9biMNh+GZsTU0uMtEr1YPjVdCPqzJe8idiMKtfE4j54wyH5tC+a3969UfZEAmWSUqNTPWMU4BfwbWdT3geen4yemu3tNgVri8AqiIgEbt/8Adqv0TOe4KrrbnOh7f/dqv0DOXq+5ucr9o2G7auLg4++a+fQstmX6e0qw71a3l0yfxHU3nYWJzIUO9fYd34+qYXS2kHVAUDatYn5Ol/WAfKRWz9qik6trY6HwP5G3lMvF7WFYmn8G9wrEXAOhU+ndNsFddyxu8Vl+P7wOeMtdlelrJ5/n+8UaycX1bZVRrLY6DTf+cyP2Zn36oLW+OFuVno6SDx2NK9YxLErdGAJyhgQCCQLWudePqkn+yiqWqMSbkrVJPMlqNzJNqnUj3mnEG+Y916xM1stmve9v1eQfSXCrWpZUqFFJA7JvfiQb+EnsW1qimxJAbQWv6zaQXSd7083bRhewsDe5Ua2O/lOtbik5UKaoNW2Fs84bH4U06rMrVApvobXAINt41nTsaL7Uwvdhccf+tgRNF2FQLYnD5muVqqeXDz32m/CzbSPOlhR5V6x/23qmlFUo2rphk5ERNzQREQBERAEREAREQDF2hhFrUqlJxdaiOjA7irKVI8jI7o9XavgaRf4w0gr/AFqDJUHodWHok3IDo4clXF4e1slc1UHNMQoqlu7341x9mARm1MYKFGrWtfq0Z7cSQLhR3k2HpnmwMCaGHpUmN2VBnP8AFUOtRvS5Y+mY3SxC1WhhR/W4hWb6uh7+b9xKU1+1JcgiAVZZTTE9BlKGAXSZNYNrop7reWkgjJbZTdgjkfbAM6IiAR23/wB2rfVt7DOU0jw5/r9emdX27+7Vvq3+6ZyAN+XokqzZV6zXbejy/fTUrsTiasNibV6nWnPzU5rqpXUuV30ntPE9kejWeVTeYKg2swI0sfDdvnmsLU7N101ZZw/P9M9xi7VOJwm/RnEVLxUfK9UjZTgFNE1BrmfOV0sM6hXXwzEtaedCcAlHEkU9FanVNuCnPSFl7ja4HCWNh40vgnv8JMwPjYe03Ppl7YmNpYZ2qVT1am41B1ZmvYd9kvLvkeYfM2vFk9atrXs2/dNd6VVwtNlqDMSLhV4m4y7++w77yUTH08QVek5y9oZu0pBBFx2gDxmp7Wqh8WaZJZaYaoxOu5cq356F28VWbpJ6mJhkf0cxp/pHDIrXvVW+lgBY2UDjoL3nWNjjPisbVtuejQB5rToipceD4ioPFTOR7DqBdpYRyoUVHape4NqagqSbbtQfQO+df6I0yMKjsCGrF8QwbeDXdqoQ/RDhfszV0qnJGd7ezJqIiYAiIgCIiAIiIAiIgCa7jz1O0cPU3Liab4Zu+pTvXo6/RGJ8xNimr/tHrilgKmI+Vh2pV0t/HTqqQvgwup7mMAwcec+1Xa2lDDIgPDrK7ln9OSjS/wAUkS15rfQTb1HH0sXiaeYO2KzujWuqGjTp0hcaEFaQ9OabAsA9LSpDLVQxTaAXryQ2O+rDuB8v+8jTMnZj2qDvuPV/KAT0REAj9u/u1f6t/umcx2Rs6nUp1KlSoUCEC4Fxrz477Tp23P3at9XU+4ZzDYuMoijVpVmZc7KRlBPwTfkeIEm4WdyqOa018Srx272tG9GlWuSngW9pYA0Gylgw0ZWG5lIvf9cpgriChuD65I7RrFlF/kKFUnW3gOA3SExZzKbDUajd+UormDr2g3ftLWJTjXdTyiZlNTpnJ6XC7Sw+zaVhcQ3k3utJvuy1DmHk044bsRxJfEbcq1DmNRQVV3dRYEIuXtWGp3nfyNpC4vGdcXVKhZl3i7gLe2/LY21B4zDwle4q33mi6+zSWNjYN+tc0qiZ3vmR2FOwDKQQzAq29CRv1PKSFRVVSnVr6HC5ct03Grf0zllDjl00Ny6OY+nRpIlWwWmrEuRvzMzXIFxpmtpuAmlbb2m3W4o0wSK1XIrKCfelNyRbcCNPSeU2rpTske5HNKqjOFU1O2Ap1GfLe1vTy9E5ijsLENbfbUa6lTax7iJJo3o7xGr3W+6bf0bwjYh6al7GvUTDAHQ9RcviAttR2TYd58vocC2gnz5+zvZuIfG4Wsw7C1L3Zhe2Vtyk3tcz6FmamaoRE8mpk9iIgCJ5EA9iIgCIiAJA9NqSvgMRScX62maSjcTUqWSkB3l2WT0g9oe+4uhR+TSBxNTlfWnQUjvY1H8aIgHN/wBknRmrgWxCVqiH3RQp1aarftim7Bjc2s6FlDLa3vi6mbyDKThXbD56QvXwtfENTX+NRWqA0Truei1hfQEq3yZZw2KSoi1KZujgMpsQbHUXB1B5g7jALtaUUjKyZ4qwC8DK6D2ZTyI9ssz2AbXPJaw75lU8wD6pdgGFtr93rfVVPuGcYwtDMLhgDyJty19fqnaNr/EVfq6n3DOI4TDvUOVFLE/rUnQbpYYL6aim2p9dCidfjkSrCow7KA5jYkMDvtv85H1KDqLlSBz4TEzCVZjbjb1STYw1FhbttQuvBQtW9EkivxGLqxD3rjbfDTi5eSpWr6vma30nrvSsKbFS1zcaG2ml/EzZ+iewaGJrFMTTzjqXI7TrbM6A/BI+SbSF6SYXPSLW7SXceHyvYD9mbj0IFsX/APHH3qcrcRb3Lj5PMvcFe7Wym9Vk/wA9VHWSG6Y9F8JgkqnCqEc09zPUa4zDsi995A8pzoVAUSx1AYEciajsPUw852npxhaYJxL3K06NQlDfKWW7U3sN5DKLA6dq99Jw7DoVAB3zkpJmSNp/Zmv/AJtgtP61v9J59RT5g/Zj/wCrYL6x/wDRqT6emKgJ7PImAIiIAiIgHsREAREQBIPo374KuKP/ALhyyX/sU7FK3zWCmp/emXOk1ZhR6pCRUrstBCN659HcfQQO/wBiSVCiqKqKAFUBVA3AAWAHoEAidkNkxeMo31Jo4gDktSn1Vh9vDOftTX8dT9yYw0t1HElqtLktbVq1L7VjUHf1ndJ/afvWMw1XXLVFTDPyuV62kzdwNJ1HfVEtdMdmivSAJKm/Zcb0cEMlRb8VYXgGATLibpHbIxZqoc4C1abFKq8nHEfNYEMvcw43kig0gHtovPDPIBsWy2vSXuuPIzLkZsN+wRyb2gfzknAMTa3xFX6up9wzk/R7bKUUKvmAz5rrazXXLla/Abx3zrG1PiKv0H+6ZyTo5tEU1yG5BdWewuCuVgQfTbykzDpO3VKnT5K3GVNXrbTjKrhPLy9yVw20qLU1ci60wqkGmLUiaTC1wO2GYX9tph43E0moVQvVBmWizCwXtWIqBQNLiw/xNzlVPaWHcKXKlz1Oa6WBK9aDuW1u0m7TdynuJwuGZaxUU8y6qQbW7Cmyi9vhZt1wT/DO0KmrNP8An0/vFtkd1Ouju1UvJ+ejXjw0XrEJasZsXRCoGxmnDDqDu4GkDu8JkVcOjYe7BmZaFNlII7Izte2mi6a90idh4wUKpdUBYqV1vuuCePzRIm0MbZoSVcp5xlK8fjgTtk7LxFTqqttOmFKmHOcc1Gq1/Bs/SquadKq4AJFGodT3Nru4cpwJiG3CxH/b8p23GYv3YtSk3YzIVuuuhvfeO+c4x3Qp0a9OsG5qwy3HiL+ycLOJtV0KpPJk67YuW63TUsyn9lZP9L4MH+Op/oVJ9Qz5r/Zzs+rS2zhOsRl7dWxt2T7xV3MNJ9KTaqJyNEIiJqZEREAREQD2IiAIiYu0cYtGk9VzZaas7HuUXMAjafv2NZvkYVMg5ddVAZvStML/AJxk5Iro5hGp0F6wWq1CatXjapUOZlvxC3CDuQSVgEV0jwLVsO60/jBlqUr6DraTCpSvbhnRb9xMo91LicKlZL5XVKgB0IuAbEcCLkEcxJia5stOqrYjBn4L5sRR+hVY9cg+jWJPICsggGubVpmi4xdMElVy1lAualEEm4A1LoSWHMFhxFpehWVlDKQysAQQbggi4IPK08MhMOfclUUj+71m96PClVbU0e5GNyvJiV4qIBPNKTF5TeAS2wH1cdwPt/OTU17Yb2q25gj8fwmwwDG2n8TV+g/3TOC0aTN8FS1uQJtw4d873tD4qp9B/umcL2VVKkkVAhsNSAQbEGxv4DdLDBOKa2vD5KbaiTrtp+PLw55FAxTj5Z9JPsM890txsfFR7QLyaNWoVXSlVsFA0sdOyo7zu8rS2cpDZsJzF0a54HS3iNe/lpJXaLl7foguzV/0+qq+J9yI64a2UAnS4LX7+NtfCVZ7ZW56+2VbRVA3YVlHJt97nd3THpHeLb9fVu/GQtq4X/RhW0s6e8umq14qesFlsDG/5Meqan3au4+Wej04OM+CbJnC18rK44a+jiPKTVfZyOLgaHUHxmrYNt49M2nYmKumQ719h3fjPK7LuKmt2Xo815/tex7Ta1juq4uGT8n+/cy+i+zwmKpNroW+406PNM2F8fT8W+6ZukvFSloULbep5E9iZMHkT2eQBERAPYiIAmvdIT11bD4Qbmbr6u/4qgVYDvzVTSW3Fc82Ga50X9+qYjGHdVfqqX1FAsqn7VQ1WvxDLygGxxEQBILpPRYKmKpKTUwxNTKN70iLVqQ5kpqB/EiSdiAafVqKzZkIZG7SkbirDMpHoImPjcMlVGput1YWI3ekHgRvB4ESmhsmtSxFWgqe8ACpRYk7nY5qI4dhr21HZZRwl+oCpswIPfAIvZGLdWOGrtmqoMyudOupXsKn0xcBwOJB0DCSpMwdq4LrVGVslRDmpVLXyPa2o4qdxXiCfGNlY41VIdclVDlqJe+Vu4/KUjUHiDzuABK7Le1VD328wR+M2uaZSfKynkQfIzc4BYxfxb/Rb2GcDwlbLe6hri1j4g6d+k79ifgN9FvZOA4PCPUuEFyBc6gWHPUywwURXPh8lPtXe3re7r3vHkZPumkTc0bG9yQx9QuADLL4tszFXNiTx4cLjdewHlFXA1FIDIwJ0Gh1PIc5jupBsQQeR0MnUpcM/UqK6q1qo6R7QZi7TqcWzb9CBqSDqdNdTfxExa9QscxsDpu7hb8JRE2SScpGlddVaipyZAaxDc5K7KxnV1AT8FtD4Hj7D6JCpuse63rmVQa48J4HaOHeDxT3OD3qfJ/hyuh9V2Zi6doYGmuvNtbtXmsn99V5rkdJ2Co6+mVOna+6Zuc5p0SxoFSkWPyhTPi3YXzLCdLl5RcVylV06PM8/ctu3W6KtU4/vP2ERE2NBERAEREAREQCB6X4t0w/V0mtWxDLh6J3lXqXBqW45EDv4JJXAYNKNJKNMWSmqoo5KoAA8hIKh/xO0XffTwS9UvI4isqtUPilLIt/+a4mzQBERAEREAodARYzEr4XSxAdeR3jwMzp5ANerbJB1pH7Db/QfzmubVwdRXFWmuWsgtlOgqpvNNu7ircD3Eg9AqUgfzmLiKNxaoodfWPygGnYTGpWQVEvY3BBFmUg2ZWHBgdCJvGCqZqaNzUH1TTtsbBakzYrC3cH4+j8pgB8ZTHGqo4fKAtqQsneiW0qdfDqaVRXCkqSpB43F+WhgExW+C3gfZPnpDPoDG1giMzXta1hvJOgVRxYkgAczOcf+GlULdcQpYgHK6kBTYXXOvwgDfXKJMwd6m3Kq4x8lZtLDXLypdCmJ9Y/BqNLaVVSCKjaG4vrra1xe9tNPCX/AOmWNs6I1rakWbQWGo3cN3ISRxnQrGU/6nOOaMG9R7XqkJi8G9M2qIyHkylfbJ9PZV6Q/IqKniLX1SvOY9ci+legVAekykcVOhFzwJ5Hv3St8Ph2JKViuugK35nfw5cfTeR1otN9zk2cu1lZpPpHs0SabHck9WyPa9rEXI015cfbLFSi1NgHFr67wdDexBHhMOXg5YaknL2deXH8ZSbcwjuWO11dPs/eMvVnqP8Ay+PpoxLw8Qq/Ge9Sm8uUqeOcLRwSWHrMqsy70Arf5LCrfyQzttNwwDDcQCPAzi2wNnjFVBQapUpiotRWemVD2yNcDMCLEXB03Ezp2w8DUw1IUmxVSuFsFaotMMFAAC3RRcC283Ou+Vey2+wa5N+yfyXW1lGI6L3a+CeiYXug8/VPDiTzliVhnTy8wDiTzlJxMAkM0SO90xAJOYuPqulN2poajqrFUBALsASqXJAFzYXPOZUQCH6LbNbD4ZEqG9Vs1Ss38VaoxeqfDMxt3ASYiIAiIgCIiAIiIAiIgFlqIvcaGR+ytiU8PUrVKd164h2Ts5A+ud00uuc2JF7XF7Akky0QDExGEV2RiWuhJWzEC5FrkDQ6E2vuvLwp2+UfOXYgFBBlqrSuLE6ciLiZEQDXcd0Ww9S+aghPNRkPmtpA4z9n9L5DOnkw9Yv65v8AaLTpTduU6VM414azX9VKfTP76+pyTFdBKy/AdX8bg/l65FVej+JpntUGAtvWzDd80mdtakDwEsVMIp4Wnb/XW6XTWk08n5PyI62faorVdtulppqHxTlay8o5nIuiNXJjVQ6Nlc2IIOiNf9d4nRTiDKNsYICph2uPjsmunwqVQAedpdrYJhK7D2FZp3U54+34LjF4l4i5vtRlHq/yWziJ518pOFbkZ57kblO5FKuvjr4GDaVjBmAW+uiXfcZiAbHERAEREAREQBERAEREAREQBERAEREAREQBERAEREAxsThadS3WIr5WDLmUGzDcwvuIude+XQgG4DylyIBTaeZRylUQCnIOU86sSuIBR1YiVRAKoiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAeREQBERAEREA/9k=" alt="product back">
                                            </a>
                                        </div><!-- End .product-image-gallery -->
                                    </div><!-- End .row -->
                                </div><!-- End .product-gallery -->
                                <table class="table">
  <tbody>
    <tr>
      <th scope="row">Format</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Epaisseur</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Tranche</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Impression</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Coins</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Pelliculage</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Vernis</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Quantité</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Adaptation graphique</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Prix Unitaire</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
    <tr>
      <th scope="row">Prix Total</th>
      <td>Lorem ipsum dolor sit amet consectetur</td>
    </tr>
  </tbody>
</table>
<a href="#" class="btn btn-devis"><i class="fa fa-download" aria-hidden="true"></i><span>Telecharger un devis</span></a>

                            </div><!-- End .col-md-6 -->

                            <div class="col-md-6" style="text-align: left;">
                                <div class="product-details">
                                    <h1 class="product-title">X-banner évasée en dentelle jaune foncé découpée</h1><!-- End .product-title -->

                                    

                                    

                                    <div class="product-content">
                                        <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.</p>
                                    </div><!-- End .product-content -->

                                    <div class="details-filter-row details-row-size">
                                        <label>Format:</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->
                                    <div class="details-filter-row details-row-size">
                                        <label>Epaisseur:</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->
                                    <div class="details-filter-row details-row-size">
                                        <label>Papier:</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->
                                    <div class="details-filter-row details-row-size">
                                        <label>Impression:</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->
                                    <div class="details-filter-row details-row-size">
                                        <label>Pelliculage:</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->
                                    <div class="details-filter-row details-row-size">
                                        <label>Type de coin:</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->
                                    <div class="details-filter-row details-row-size">
                                        <label>Vernis:</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->
                                    <div class="details-filter-row details-row-size">
                                        <label>Quantité:</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->
                                    <div class="details-filter-row details-row-size">
                                        <label>Adaptation graphique :</label>

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                            <a href="#" style="display: block;">
                                                <img src="https://www.cimenterie-de-la-tour.com/wp-content/uploads/2021/03/cimenterie-de-la-tour-carreau-de-ciment-moderne-tendance-bicolor-graphique-M1825-1200x512.png" alt="product desc">
                                                <div class="product-nav-product-nav-thumbs-text">80 x 180 cm</div>
                                            </a>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->

                                    <div class="product-price">
                                        <span>Prix unitaire : </span><span style="margin-left: 4px;"> $84.00</span>
                                    </div><!-- End .product-price -->
                                    <div class="product-price">
                                        <span>Total : </span><span style="margin-left: 4px;"> $90.00</span>
                                    </div><!-- End .product-price -->

                                    


                                    <div class="product-details-action">
                                        <a href="#" class="btn-product btn-cart"><span>Ajouter au panier</span></a>
                                    </div><!-- End .product-details-action -->
                                </div><!-- End .product-details -->
                            </div><!-- End .col-md-6 -->
                        </div><!-- End .row -->
                    </div><!-- End .product-details-top -->
                </div><!-- End .container -->
            </div><!-- End .page-content -->
        </main><!-- End .main -->
    <Footer />
    
</template>
<style scoped>
.breadcrumb {
    background: none !important;
    border-radius: 0;
    margin: 0;
    padding: 0;
}
.breadcrumb-item+.breadcrumb-item:before {
    color: #999999;
    content: '\f112';
    font-family: "molla";
    padding-right: 0.7rem;
    font-size: 1.1rem;
    vertical-align: middle;
    margin-top: -0.1rem;
}
.breadcrumb a {
    font-weight: 300;
}



.details-filter-row {
    display: block;
}

.product-nav-thumbs a, .product-nav-thumbs span {
    width: 7.4rem;
    height: 7.4rem;
    padding: 5px;
    margin-top: 10px;
}


.details-filter-row label {
    width: auto;
}


.table {
    text-align: left;
}

.btn-devis {
    border: 1px solid #c96;
    border-radius: 0;
    width: 100%;
    padding: 13px;
    font-size: 14px;
    color: #c96;
}


.product-price {
    background: #3399ffab;
    padding: 11px;
    font-size: 15px;
    color: #ffffff;
}
/* Media query */
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 992px) {
    .page-content {
        padding: 2rem;
    }
    .details-filter-row {
    display: inline-block !important;
    margin-left: 25px;
}
.btn-cart {
    min-width: 100%;
}
.btn-devis {
    margin: 20px 0;
}
}
</style>