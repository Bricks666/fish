pragma solidity 0.8.13;

contract Utils {
    address[] zeroAddress;

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
        createUser(
            "ivan",
            0xc97E2f334315eb44ea6a14A51C4Ca83b74888FF6,
            "Ivanov Ivan Ivanovich",
            ROLES.ADMIN,
            address(0)
        );
        createUser(
            "vasya",
            0xF1fb2b5C30a5d543fCef834Cc0AF03FbDB329Ac3,
            "Sinichkina Vasilisa Sergeevna",
            ROLES.SHOPER,
            address(0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5)
        );
        createUser(
            "petr",
            0xAf23ad742D7C52c2a0768eF61757B2e41F94D947,
            "Petrov Petr Petrovich",
            ROLES.USER,
            address(0)
        );
        createUser(
            "bank",
            0x1ff7E5a292b7ad77d373b6a863b0cD422Fc0B383,
            "Ivanov Ivan Ivanovich",
            ROLES.BANK,
            address(0)
        );
        createUser(
            "funny crab",
            0xf35BebbCe8A3b24e750A2A93ffc13964305B3dF3,
            "Ivanov Ivan Ivanovich",
            ROLES.PROVIDER,
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

    function registration(string memory login, string memory FIO) external {
        require(
            getByteString(users[msg.sender].login) == getByteString(""),
            "You are already registered"
        );
        require(getByteString(login) != getByteString(""), "Check login");
        require(getByteString(FIO) != getByteString(""), "Check FIO");
        createUser(login, msg.sender, FIO, ROLES.USER, address(0));
    }

    function changeRole(address user, ROLES newRole) internal {
        users[user].role = newRole;
        emit changeRoleEvent(user, newRole);
    }

    function changeOnRequest(address user, bool onRequest) internal {
        users[user].onRequest = onRequest;
        emit changeOnRequestEvent(user, onRequest);
    }

    function createUser(
        string memory login,
        address userAddress,
        string memory fio,
        ROLES role,
        address shopAddress
    ) internal {
        usersAddresses.push(userAddress);
        users[userAddress] = User(
            login,
            userAddress,
            0x7880aec93413f117ef14bd4e6d130875ab2c7d7d55a064fac3c2f7bd51516380,
            fio,
            role,
            false,
            shopAddress
        );
        emit newUser(userAddress);
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
        createShop(
            0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5,
            "shop1",
            "Shop-1",
            "Orel"
        );
        createShop(
            0xf35BebbCe8A3b24e750A2A93ffc13964305B3dF3,
            "shop2",
            "Shop-2",
            "Orel"
        );
        createShop(
            0x95b33F680d0546184cf80622C78354c9cE86C145,
            "shop3",
            "Shop-3",
            "Orel"
        );
        createShop(
            0xa3718aB0FD71a078963fb143f3903878c1ed091b,
            "shop3",
            "Shop-3",
            "Orel"
        );
        createShop(
            0x6b66DF493EEeF85267842D55b8Ac855f478D6702,
            "shop4",
            "Shop-4",
            "Orel"
        );
        createShop(
            0x74b3a806EeF9e5Ba94d4F4bC091a9810e1c20F68,
            "shop5",
            "Shop-5",
            "Orel"
        );
        createShop(
            0xe7A7f255bb2D488f61D6e98ce04f505F51e35d81,
            "shop6",
            "Shop-6",
            "Orel"
        );
        createShop(
            0x3DAc6585d3EF9141089B9652984Fc70c407448A9,
            "shop7",
            "Shop-7",
            "Orel"
        );
        createShop(
            0x78B577635A1edb47bC2F9cDB336eE02B8034A4ad,
            "shop8",
            "Shop-8",
            "Orel"
        );
        createShop(
            0xeeaFf0C715c8Dd3779f42AdC4831AdFB4715cD5E,
            "shop9",
            "Shop-9",
            "Orel"
        );
        shops[0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5].shopers.push(
            0xF1fb2b5C30a5d543fCef834Cc0AF03FbDB329Ac3
        );
    }

    function getShopsAddresses() external view returns (address[] memory) {
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
        createShop(Address, login, shopName, city);
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

    function createShop(
        address shopAddress,
        string memory login,
        string memory shopName,
        string memory city
    ) private {
        createUser(login, shopAddress, shopName, ROLES.SHOP, address(0));
        shopsAddresses.push(shopAddress);
        shops[shopAddress] = Shop(
            shopsAddresses.length,
            shopAddress,
            shopName,
            city,
            zeroAddress
        );
        emit newShop(shopAddress);
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

    constructor() {
        createRequest(
            TYPE.TOADMIN,
            0xAf23ad742D7C52c2a0768eF61757B2e41F94D947,
            ROLES.ADMIN,
            address(0)
        );
        createRequest(
            TYPE.TOUSER,
            0xF1fb2b5C30a5d543fCef834Cc0AF03FbDB329Ac3,
            ROLES.USER,
            address(0)
        );
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
        createRequest(requestType, msg.sender, newRole, shopAddress);
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

    function createRequest(
        TYPE requestType,
        address sender,
        ROLES newRole,
        address shopAddress
    ) private {
        requests.push(
            Request({
                id: requests.length,
                requestType: requestType,
                senderAddress: sender,
                currentRole: users[sender].role,
                newRole: newRole,
                status: STATUS.WAITING,
                shopAddress: shopAddress
            })
        );
        changeOnRequest(msg.sender, true);
        emit newRequest(requests.length, msg.sender);
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
        address subjectAddress;
        uint256 mark; //1-10
        address[] likes; //адреса подвердивших
        address[] dislikes; // адреса опровергнувших
    }

    mapping(address => Review[]) public reveiws;

    event newReview(address indexed subjectAddress, uint256 id);
    event markReview(
        address indexed subjectAddress,
        uint256 indexed reviewId,
        Mark mark
    ); //1-like 0- dislike

    constructor() {
        createReview(
            0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5,
            "asdfasdas",
            6
        );
        createReview(
            0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5,
            "asdfaadfasdfsdas",
            4
        );
        createReview(0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5, "ASDDads", 6);
    }

    modifier isNotLikedReview(address subjectAddress, uint256 reviewId) {
        bool flag = false;
        for (
            uint256 i = 0;
            i < reveiws[subjectAddress][reviewId].likes.length;
            i++
        ) {
            if (msg.sender == reveiws[subjectAddress][reviewId].likes[i]) {
                flag = true;
                break;
            }
        }
        require(flag == false, "You are already liked this Review");
        _;
    }

    modifier isNotDislikedReview(address subjectAddress, uint256 reviewId) {
        bool flag = false;
        for (
            uint256 i = 0;
            i < reveiws[subjectAddress][reviewId].dislikes.length;
            i++
        ) {
            if (msg.sender == reveiws[subjectAddress][reviewId].dislikes[i]) {
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

    function getReview(address subjectAddress, uint256 reviewId)
        external
        view
        returns (Review memory)
    {
        return reveiws[subjectAddress][reviewId];
    }

    function addReview(
        address subjectAddress,
        string memory text,
        uint256 mark
    ) external isReg(msg.sender) {
        createReview(subjectAddress, text, mark);
    }

    function likeReview(address subjectAddress, uint256 reviewId)
        external
        isReg(msg.sender)
        isNotLikedReview(subjectAddress, reviewId)
        isNotDislikedReview(subjectAddress, reviewId)
    {
        reveiws[subjectAddress][reviewId].likes.push(msg.sender);
        emit markReview(subjectAddress, reviewId, Mark.LIKE);
    }

    function dislikeReview(address subjectAddress, uint256 reviewId)
        external
        isReg(msg.sender)
        isNotLikedReview(subjectAddress, reviewId)
        isNotDislikedReview(subjectAddress, reviewId)
    {
        reveiws[subjectAddress][reviewId].dislikes.push(msg.sender);
        emit markReview(subjectAddress, reviewId, Mark.DISLIKE);
    }

    function createReview(
        address subjectAddress,
        string memory text,
        uint256 mark
    ) private {
        uint256 countReview = reveiws[subjectAddress].length;
        reveiws[subjectAddress].push(
            Review(
                countReview,
                text,
                subjectAddress,
                mark,
                zeroAddress,
                zeroAddress
            )
        );
        emit newReview(subjectAddress, countReview);
    }
}

contract Comments is Shops {
    struct Comment {
        uint256 id;
        uint256 reviewId;
        string text;
        address subjectAddress;
    }

    mapping(address => mapping(uint256 => Comment[])) public comments;

    event newComment(
        address indexed subjectAddress,
        uint256 indexed reviewId,
        uint256 idComment
    );

    constructor() {}

    function getComments(address subjectAddress, uint256 reviewId)
        external
        view
        returns (Comment[] memory)
    {
        return comments[subjectAddress][reviewId];
    }

    function getComment(
        address subjectAddress,
        uint256 reviewId,
        uint256 commentId
    ) external view returns (Comment memory) {
        return comments[subjectAddress][reviewId][commentId];
    }

    function addComment(
        address subjectAddress,
        uint256 reviewId,
        string memory text
    ) public isReg(msg.sender) {
        uint256 commentCount = comments[subjectAddress][reviewId].length;
        comments[subjectAddress][reviewId].push(
            Comment(commentCount, reviewId, text, subjectAddress)
        );
        emit newComment(subjectAddress, reviewId, commentCount);
    }
}

contract Fish is Users, Shops, Requests, Reviews, Comments {
    constructor() {}
}
