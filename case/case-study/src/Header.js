function Header() {
    return(
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid d-flex justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Dịch vụ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/customer">Khách hàng</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Hợp đồng</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/create-service">Thêm dịch vụ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/customer-create">Thêm khách hàng</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact-create">Tạo hợp đồng</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;