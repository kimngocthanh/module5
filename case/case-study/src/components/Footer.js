function Footer() {
    return (
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ">
            <div className="col mb-3">
                <a
                    href="/#"
                    className="d-flex align-items-center mb-3 link-dark text-decoration-none"
                >
                    <svg className="bi me-2" width={40} height={32}>
                        <use xlinkHref="#bootstrap" />
                    </svg>
                </a>
                <p className="text-muted">© 2022</p>
            </div>
            <div className="col mb4" />
            <div className="col mb-4">
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="/#" className="nav-link p-0 text-muted">
                            Giá Công bố
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="/#" className="nav-link p-0 text-muted">
                            Lifestyle Blog
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="/#" className="nav-link p-0 text-muted">
                            Tuyển dụng
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="/#" className="nav-link p-0 text-muted">
                            Liên hệ
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col mb-4">
                <h4>Liên hệ</h4>
                <p>
                    <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "#046056", fontSize: "1.5rem" }}
                    />{" "}
                    103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District,
                    Danang City, Vietnam
                </p>
                <p>
                    <i
                        className="fa-solid fa-phone"
                        style={{ color: "#046056", fontSize: "1.5rem" }}
                    />{" "}
                    Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                </p>
                <p>
                    <i
                        className="fa-regular fa-envelope"
                        style={{ color: "#046056", fontSize: "1.5rem" }}
                    />{" "}
                    Email: reservation@furamavietnam.com * www.furamavietnam.com GDS Codes:
                    Amadeus-GD DADFUR, Galileo/Apollo-GD 16236, Sabre-GD 032771, Worldspan- GD
                    DADFU
                </p>
            </div>
        </footer>
    )
}

export default Footer;