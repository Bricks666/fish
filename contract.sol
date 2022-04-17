pragma solidity 0.8.13;

contract Utils {
    function getByteString(string memory word) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(word));
    }
}

contract Users is Utils {
    enum ROLES {
        USER,
        SHOPER,
        ADMIN,
        SHOP,
        BANK,
        PROVIDER
    }
    struct User {
        string login;
        address Address;
        bytes32 password;
        string FIO;
        ROLES role;
        bool onRequest;
        address shopAddress; //для продавца - адрес магазина, в котором работает
    }

    address[] public usersAddresses;
    mapping(address => User) public users;

    event newUser(address Address);
    event changeRoleEvent(address indexed Address, ROLES indexed newRole);
    event changeOnRequestEvent(address indexed Address, bool onRequest);

    modifier isReg(address user) {
        require(
            getByteString(users[user].login) != getByteString(""),
            "You are not registered"
        );
        _;
    }

    constructor() {
        usersAddresses.push(0x467aE47AAa1b7E89A887139e4394D3cFb4a927Bc);
        users[0x467aE47AAa1b7E89A887139e4394D3cFb4a927Bc] = User(
            "ivan",
            0x467aE47AAa1b7E89A887139e4394D3cFb4a927Bc,
            0x7880aec93413f117ef14bd4e6d130875ab2c7d7d55a064fac3c2f7bd51516380,
            "Ivanov Ivan Ivanovich",
            ROLES.ADMIN,
            false,
            address(0)
        );
        usersAddresses.push(0x6C5D35D0DE76e385b0d5B53f541b697c2934abdC);
        users[0x6C5D35D0DE76e385b0d5B53f541b697c2934abdC] = User(
            "vasya",
            0x6C5D35D0DE76e385b0d5B53f541b697c2934abdC,
            0x7880aec93413f117ef14bd4e6d130875ab2c7d7d55a064fac3c2f7bd51516380,
            "Sinichkina Vasilisa Sergeevna",
            ROLES.SHOPER,
            false,
            address(0x686F2aEe07a96DfB24F92c5742AfaBA6D05dE30c)
        );
        usersAddresses.push(0x8F4130fc23486bb9F3F4260dB848847A7A420067);
        users[0x8F4130fc23486bb9F3F4260dB848847A7A420067] = User(
            "petr",
            0x8F4130fc23486bb9F3F4260dB848847A7A420067,
            0x7880aec93413f117ef14bd4e6d130875ab2c7d7d55a064fac3c2f7bd51516380,
            "Petrov Petr Petrovich",
            ROLES.USER,
            false,
            address(0)
        );

        usersAddresses.push(0x9871A282CC8a901e7100bad1b9e3ebAA179c7EE3);
        users[0x9871A282CC8a901e7100bad1b9e3ebAA179c7EE3] = User(
            "bank",
            0x9871A282CC8a901e7100bad1b9e3ebAA179c7EE3,
            0x7880aec93413f117ef14bd4e6d130875ab2c7d7d55a064fac3c2f7bd51516380,
            "Ivanov Ivan Ivanovich",
            ROLES.BANK,
            false,
            address(0)
        );
        usersAddresses.push(0xAa42390f2CBc5c7DC3175FB5dc5711142A956c2A);
        users[0xAa42390f2CBc5c7DC3175FB5dc5711142A956c2A] = User(
            "funny crab",
            0xAa42390f2CBc5c7DC3175FB5dc5711142A956c2A,
            0x7880aec93413f117ef14bd4e6d130875ab2c7d7d55a064fac3c2f7bd51516380,
            "Ivanov Ivan Ivanovich",
            ROLES.PROVIDER,
            false,
            address(0)
        );
    }

    function getUsersAddresses() external view returns (address[] memory) {
        return usersAddresses;
    }

    function login(string memory login, bytes32 password)
        external
        view
        isReg(msg.sender)
        returns (User memory)
    {
        require(
            getByteString(users[msg.sender].login) == getByteString(login),
            "Check login"
        );
        require(users[msg.sender].password == password, "You wrong password");
        return users[msg.sender];
    }

    function registration(
        string memory login,
        bytes32 password,
        string memory FIO
    ) external {
        require(
            getByteString(users[msg.sender].login) == getByteString(""),
            "You are already registered"
        );
        require(password != bytes32(0), "Check password");
        require(getByteString(login) != getByteString(""), "Check login");
        require(getByteString(FIO) != getByteString(""), "Check FIO");
        usersAddresses.push(msg.sender);
        users[msg.sender] = User(
            login,
            msg.sender,
            password,
            FIO,
            ROLES.USER,
            false,
            address(0)
        );
        emit newUser(msg.sender);
    }

    function changeRole(address user, ROLES newRole) internal {
        users[user].role = newRole;
        emit changeRoleEvent(user, newRole);
    }

    function changeOnRequest(address user, bool onRequest) internal {
        users[user].onRequest = onRequest;
        emit changeOnRequestEvent(user, onRequest);
    }
}

contract Shops is Users {
    struct Shop {
        uint256 id;
        address Address;
        string Name;
        string city;
        address[] shopers;
    }

    address[] public shopsAddresses;
    mapping(address => Shop) public shops;

    event newShop(address Address);
    event delShop(address Address);

    modifier isShopAddress(address Address) {
        require(users[Address].role == ROLES.SHOP, "It's not a shop");
        _;
    }

    constructor() {
        address[] memory zeroAddress;

        usersAddresses.push(0x686F2aEe07a96DfB24F92c5742AfaBA6D05dE30c);
        users[0x686F2aEe07a96DfB24F92c5742AfaBA6D05dE30c] = User(
            "shop1",
            0x686F2aEe07a96DfB24F92c5742AfaBA6D05dE30c,
            0x7880aec93413f117ef14bd4e6d130875ab2c7d7d55a064fac3c2f7bd51516380,
            "Shop 1",
            ROLES.SHOP,
            false,
            address(0)
        );
        shopsAddresses.push(0x686F2aEe07a96DfB24F92c5742AfaBA6D05dE30c);
        shops[0x686F2aEe07a96DfB24F92c5742AfaBA6D05dE30c] = Shop(
            0,
            0x686F2aEe07a96DfB24F92c5742AfaBA6D05dE30c,
            "Shop 1",
            "Orel",
            zeroAddress
        );
        shops[0x686F2aEe07a96DfB24F92c5742AfaBA6D05dE30c].shopers.push(
            0x6C5D35D0DE76e385b0d5B53f541b697c2934abdC
        );
    }

    function getShopsAddreesses() external view returns (address[] memory) {
        return shopsAddresses;
    }

    function getShopShopers(address Address)
        external
        view
        returns (address[] memory)
    {
        return shops[Address].shopers;
    }

    function addShop(
        address Address,
        string memory login,
        string memory shopName,
        string memory city
    ) public isReg(msg.sender) {
        require(users[msg.sender].role == ROLES.ADMIN, "You are not an admin");
        require(
            users[Address].Address == address(0),
            "This address is already buzy"
        );
        usersAddresses.push(msg.sender);
        shopsAddresses.push(Address);
        users[Address] = User(
            login,
            Address,
            0x7880aec93413f117ef14bd4e6d130875ab2c7d7d55a064fac3c2f7bd51516380,
            shopName,
            ROLES.SHOP,
            false,
            address(0)
        );
        address[] memory zeroAddress;
        shops[Address] = Shop(
            shopsAddresses.length,
            Address,
            shopName,
            city,
            zeroAddress
        );
        emit newUser(Address);
        emit newShop(Address);
    }

    function deleteShop(address shopAddress) public isReg(msg.sender) {
        require(users[msg.sender].role == ROLES.ADMIN, "You are not an admin");
        require(
            getByteString(shops[shopAddress].Name) != getByteString(""),
            "Shop is deleted"
        );
        Shop memory shop = shops[shopAddress];
        for (uint256 i = 0; i < shop.shopers.length; i++) {
            users[shop.shopers[i]].shopAddress = address(0);
            changeRole(shop.shopers[i], ROLES.USER);
        }
        delete users[shopAddress];
        delete shops[shopAddress];
        delete shopsAddresses[shop.id];
        emit delShop(shopAddress);
    }
}

contract Requests is Shops {
    enum STATUS {
        WAITING,
        CANCELED,
        ACCEPTED
    }
    enum TYPE {
        TOADMIN,
        TOUSER,
        TOSHOPER
    }
    struct Request {
        uint256 id;
        TYPE requestType;
        address senderAddress;
        ROLES currentRole;
        ROLES newRole;
        STATUS status;
        address shopAddress;
    }

    Request[] public requests;

    event newRequest(uint256 id, address indexed senderAddress);
    event newStatusRequest(uint256 id, address indexed Address, STATUS status);

    modifier notOnRequest(address user) {
        require(!users[user].onRequest, "You are in request");
        _;
    }

    function getRequests() external view returns (Request[] memory) {
        return requests;
    }

    function addRequest(TYPE requestType, address shopAddress)
        public
        isReg(msg.sender)
        notOnRequest(msg.sender)
    {
        ROLES newRole;
        if (requestType == TYPE.TOADMIN) {
            newRole = ROLES.ADMIN;
        } else if (requestType == TYPE.TOSHOPER) {
            newRole = ROLES.SHOPER;
        } else {
            newRole = ROLES.USER;
        }
        requests.push(
            Request(
                requests.length,
                requestType,
                msg.sender,
                users[msg.sender].role,
                newRole,
                STATUS.WAITING,
                shopAddress
            )
        );
        changeOnRequest(msg.sender, true);
        emit newRequest(requests.length, msg.sender);
    }

    function acceptRequest(uint256 requestId) public isReg(msg.sender) {
        require(users[msg.sender].role == ROLES.ADMIN, "You are not an admin");
        require(
            requests[requestId].status == STATUS.WAITING,
            "This request is already precessed"
        );
        requests[requestId].status = STATUS.ACCEPTED;
        if (requests[requestId].requestType == TYPE.TOUSER) {
            changeRole(requests[requestId].senderAddress, ROLES.USER);
            users[requests[requestId].senderAddress].shopAddress = address(0);
            for (
                uint256 i = 0;
                i <
                shops[users[requests[requestId].senderAddress].shopAddress]
                    .shopers
                    .length;
                i++
            ) {
                if (
                    requests[requestId].senderAddress ==
                    shops[users[requests[requestId].senderAddress].shopAddress]
                        .shopers[i]
                ) {
                    delete shops[
                        users[requests[requestId].senderAddress].shopAddress
                    ].shopers[i];
                }
            }
        } else if (requests[requestId].requestType == TYPE.TOSHOPER) {
            shops[requests[requestId].shopAddress].shopers.push(
                requests[requestId].senderAddress
            );
            users[requests[requestId].senderAddress].shopAddress = requests[
                requestId
            ].shopAddress;
            changeRole(requests[requestId].senderAddress, ROLES.SHOPER);
        } else {
            changeRole(requests[requestId].senderAddress, ROLES.ADMIN);
        }
        emit newStatusRequest(
            requestId,
            requests[requestId].senderAddress,
            STATUS.ACCEPTED
        );
        changeOnRequest(requests[requestId].senderAddress, false);
    }

    function cancelRequest(uint256 requestId) public isReg(msg.sender) {
        require(users[msg.sender].role == ROLES.ADMIN, "You are not an admin");
        require(
            requests[requestId].status == STATUS.WAITING,
            "This request is already precessed"
        );
        requests[requestId].status = STATUS.CANCELED;
        emit newStatusRequest(
            requestId,
            requests[requestId].senderAddress,
            STATUS.CANCELED
        );
        changeOnRequest(requests[requestId].senderAddress, false);
    }
}

contract Reviews is Shops {
    enum Mark {
        DISLIKE,
        LIKE
    }
    struct Review {
        uint256 id;
        string text;
        address shopAddress;
        uint256 mark; //1-10
        address[] likes; //адреса подвердивших
        address[] dislikes; // адреса опровергнувших
    }

    mapping(address => Review[]) public reveiws;

    event newReview(address indexed shopAddress, uint256 id);
    event markReview(
        address indexed shopAddress,
        uint256 indexed reviewId,
        Mark mark
    ); //1-like 0- dislike

    modifier isNotLikedReview(address shopAddress, uint256 reviewId) {
        bool flag = false;
        for (
            uint256 i = 0;
            i < reveiws[shopAddress][reviewId].likes.length;
            i++
        ) {
            if (msg.sender == reveiws[shopAddress][reviewId].likes[i]) {
                flag = true;
                break;
            }
        }
        require(flag == false, "You are already liked this Review");
        _;
    }

    modifier isNotDislikedReview(address shopAddress, uint256 reviewId) {
        bool flag = false;
        for (
            uint256 i = 0;
            i < reveiws[shopAddress][reviewId].dislikes.length;
            i++
        ) {
            if (msg.sender == reveiws[shopAddress][reviewId].dislikes[i]) {
                flag = true;
                break;
            }
        }
        require(flag == false, "You are already disliked this Review");
        _;
    }

    function getReviews(address subjectAddress)
        external
        view
        returns (Review[] memory)
    {
        return reveiws[subjectAddress];
    }

    function addReviews(
        string memory text,
        address shopAddress,
        uint256 mark
    ) external isShopAddress(shopAddress) isReg(msg.sender) {
        address[] memory zeroAddress;
        uint256 countReview = reveiws[shopAddress].length;
        reveiws[shopAddress].push(
            Review(
                countReview,
                text,
                shopAddress,
                mark,
                zeroAddress,
                zeroAddress
            )
        );
        emit newReview(shopAddress, countReview);
    }

    function likeReview(address shopAddress, uint256 reviewId)
        external
        isReg(msg.sender)
        isNotLikedReview(shopAddress, reviewId)
        isNotDislikedReview(shopAddress, reviewId)
    {
        reveiws[shopAddress][reviewId].likes.push(msg.sender);
        emit markReview(shopAddress, reviewId, Mark.LIKE);
    }

    function dislikeReview(address shopAddress, uint256 reviewId)
        external
        isReg(msg.sender)
        isNotLikedReview(shopAddress, reviewId)
        isNotDislikedReview(shopAddress, reviewId)
    {
        reveiws[shopAddress][reviewId].dislikes.push(msg.sender);
        emit markReview(shopAddress, reviewId, Mark.DISLIKE);
    }
}

contract Comments is Shops {
    struct Comment {
        uint256 idReviews;
        uint256 idComment;
        string text;
        address shopAddress;
    }

    mapping(address => mapping(uint256 => Comment[])) public comments;

    event newComment(
        address indexed shopAddress,
        uint256 indexed reviewId,
        uint256 idComment
    );

    constructor() {}

    function addComment(
        uint256 reviewId,
        string memory text,
        address shopAddress
    ) public isShopAddress(shopAddress) isReg(msg.sender) {
        uint256 countComment = comments[shopAddress][reviewId].length;
        comments[shopAddress][reviewId].push(
            Comment(reviewId, countComment, text, shopAddress)
        );
        emit newComment(shopAddress, reviewId, countComment);
    }
}

contract Fish is Users, Shops, Requests, Reviews, Comments {
    constructor() {}
}
