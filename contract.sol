contract Utils {
	address[] zeroAddress;

	function getByteString(string memory word) internal pure returns (bytes32) {
		return keccak256(abi.encodePacked(word));
	}
}

contract Users is Utils {
	enum ROLES {
		USER,
		SALESMAN,
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
		require(getByteString(users[user].login) != getByteString(''), 'You are not registered');
		_;
	}

	constructor() {
		createUser(
			'ivan',
			0x7bCc08b169dCd1a3f07d9e0313D9F315C1c765Eb,
			getByteString('000000'),
			'Ivanov Ivan Ivanovich',
			ROLES.ADMIN,
			address(0)
		);
		createUser(
			'vasya',
			0xCC100D75da2775392dedA25DAc8Bcf5569717f34,
			getByteString('000000'),
			'Sinichkina Vasilisa Sergeevna',
			ROLES.SALESMAN,
			address(0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5)
		);
		createUser(
			'petr',
			0xAf23ad742D7C52c2a0768eF61757B2e41F94D947,
			getByteString('000000'),
			'Petrov Petr Petrovich',
			ROLES.USER,
			address(0)
		);
		createUser(
			'bank',
			0x1ff7E5a292b7ad77d373b6a863b0cD422Fc0B383,
			getByteString('000000'),
			'Ivanov Ivan Ivanovich',
			ROLES.BANK,
			address(0)
		);
		createUser(
			'funny crab',
			0xf35BebbCe8A3b24e750A2A93ffc13964305B3dF3,
			getByteString('000000'),
			'Ivanov Ivan Ivanovich',
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
		returns (address)
	{
		require(getByteString(users[msg.sender].login) == getByteString(login), 'Check login');
		require(users[msg.sender].password == password, 'You wrong password');
		return msg.sender;
	}

	function registration(string memory login, string memory FIO) external {
		require(
			getByteString(users[msg.sender].login) == getByteString(''),
			'You are already registered'
		);
		require(getByteString(login) != getByteString(''), 'Check login');
		require(getByteString(FIO) != getByteString(''), 'Check FIO');
		createUser(login, msg.sender, getByteString('000000'), FIO, ROLES.USER, address(0));
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
		bytes32 password,
		string memory fio,
		ROLES role,
		address shopAddress
	) internal {
		usersAddresses.push(userAddress);
		users[userAddress] = User(login, userAddress, password, fio, role, false, shopAddress);
		emit newUser(userAddress);
	}
}

contract Shops is Users {
	struct Shop {
		uint256 id;
		address Address;
		string Name;
		string city;
	}

	Shop[] public shops;
	mapping(address => uint256) public shopIndexes;
	mapping(uint256 => User[]) salesmen;
	mapping(uint256 => mapping(address => uint256)) salesmanIndexes;

	event newShop(uint256 shopId);
	event delShop(uint256 shopId);

	modifier isShopAddress(address Address) {
		require(users[Address].role == ROLES.SHOP, "It's not a shop");
		_;
	}

	constructor() {
		createShop(0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5, 'shop1', 'Shop-1', 'Orel');
		createShop(0xf35BebbCe8A3b24e750A2A93ffc13964305B3dF3, 'shop2', 'Shop-2', 'Orel');
		createShop(0x95b33F680d0546184cf80622C78354c9cE86C145, 'shop3', 'Shop-3', 'Orel');
		createShop(0xa3718aB0FD71a078963fb143f3903878c1ed091b, 'shop3', 'Shop-3', 'Orel');
		createShop(0x6b66DF493EEeF85267842D55b8Ac855f478D6702, 'shop4', 'Shop-4', 'Orel');
		createShop(0x74b3a806EeF9e5Ba94d4F4bC091a9810e1c20F68, 'shop5', 'Shop-5', 'Orel');
		createShop(0xe7A7f255bb2D488f61D6e98ce04f505F51e35d81, 'shop6', 'Shop-6', 'Orel');
		createShop(0x3DAc6585d3EF9141089B9652984Fc70c407448A9, 'shop7', 'Shop-7', 'Orel');
		createShop(0x78B577635A1edb47bC2F9cDB336eE02B8034A4ad, 'shop8', 'Shop-8', 'Orel');
		createShop(0xeeaFf0C715c8Dd3779f42AdC4831AdFB4715cD5E, 'shop9', 'Shop-9', 'Orel');
		salesmen[0].push(users[0xF1fb2b5C30a5d543fCef834Cc0AF03FbDB329Ac3]);
	}

	function getShops() external view returns (Shop[] memory) {
		return shops;
	}

	function getSalesmen(uint256 shopId) external view returns (User[] memory) {
		return salesmen[shopId];
	}

	function addShop(
		address shopAddress,
		string memory login,
		string memory shopName,
		string memory city
	) public isReg(msg.sender) {
		require(users[msg.sender].role == ROLES.ADMIN, 'You are not an admin');
		require(users[shopAddress].Address == address(0), 'This address is already buzy');
		createShop(shopAddress, login, shopName, city);
	}

	function deleteShop(uint shopId) public isReg(msg.sender) {
		require(users[msg.sender].role == ROLES.ADMIN, 'You are not an admin');

		require(shops[shopId].Address != address(0), 'Shop is deleted');

		User[] memory shopSalesmen = salesmen[shopId];

		for (uint256 i = 0; i < shopSalesmen.length; i++) {
			deleteSalesman(shopId, i);
		}

    address shopAddress = shops[shopId].Address;

		delete users[shopAddress];
		delete shopIndexes[shopAddress];
		delete shops[shopId];

		emit delShop(shopId);
	}

	function createShop(
		address shopAddress,
		string memory login,
		string memory shopName,
		string memory city
	) private {
		createUser(login, shopAddress, getByteString('000000'), shopName, ROLES.SHOP, address(0));
		shops.push(Shop(shops.length, shopAddress, shopName, city));
		shopIndexes[shopAddress] = shops.length - 1;

		emit newShop(shops.length - 1);
	}

	function addSalesman(uint256 shopId, address salesmanAddress) internal {
		User memory salesman = users[salesmanAddress];

		salesmen[shopId].push(salesman);
		salesmanIndexes[shopId][salesmanAddress] = salesmen[shopId].length - 1;

		changeRole(salesman.Address, ROLES.USER);
	}

	function deleteSalesman(uint256 shopId, uint256 salesmanId) internal {
		User memory salesman = salesmen[shopId][salesmanId];
		users[salesman.Address].shopAddress = address(0);

		changeRole(salesman.Address, ROLES.USER);

		delete salesmanIndexes[shopId][salesman.Address];
		delete salesmen[shopId][salesmanId];
	}
}

contract Requests is Shops {
	enum STATUS {
		WAITING,
		CANCELED,
		ACCEPTED
	}

	enum TYPE {
		BE_ADMIN,
		BE_USER,
		BE_SALESMAN
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
		require(!users[user].onRequest, 'You are in request');
		_;
	}

	constructor() {
		createRequest(
			TYPE.BE_ADMIN,
			0xAf23ad742D7C52c2a0768eF61757B2e41F94D947,
			ROLES.ADMIN,
			address(0)
		);
		createRequest(TYPE.BE_USER, 0xF1fb2b5C30a5d543fCef834Cc0AF03FbDB329Ac3, ROLES.USER, address(0));
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
		if (requestType == TYPE.BE_ADMIN) {
			newRole = ROLES.ADMIN;
		} else if (requestType == TYPE.BE_SALESMAN) {
			newRole = ROLES.SALESMAN;
		} else {
			newRole = ROLES.USER;
		}
		createRequest(requestType, msg.sender, newRole, shopAddress);
	}

	function acceptRequest(uint256 requestId) public isReg(msg.sender) {
		require(users[msg.sender].role == ROLES.ADMIN, 'You are not an admin');
		Request memory request = requests[requestId];
		require(request.status == STATUS.WAITING, 'This request is already precessed');
		request.status = STATUS.ACCEPTED;
		User memory requester = users[request.senderAddress];
		if (request.requestType == TYPE.BE_USER) {
			uint256 shopId = shopIndexes[requester.shopAddress];
			deleteSalesman(shopId, salesmanIndexes[shopId][requester.Address]);
		} else if (request.requestType == TYPE.BE_SALESMAN) {
			addSalesman(shopIndexes[request.shopAddress], requester.Address);
		} else {
			changeRole(request.senderAddress, ROLES.ADMIN);
		}
		emit newStatusRequest(requestId, request.senderAddress, STATUS.ACCEPTED);
		changeOnRequest(request.senderAddress, false);
	}

	function cancelRequest(uint256 requestId) public isReg(msg.sender) {
		require(users[msg.sender].role == ROLES.ADMIN, 'You are not an admin');
		Request memory request = requests[requestId];
		require(request.status == STATUS.WAITING, 'This request is already precessed');
		request.status = STATUS.CANCELED;
		emit newStatusRequest(requestId, request.senderAddress, STATUS.CANCELED);
		changeOnRequest(request.senderAddress, false);
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

contract Reviews is Users {
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
	event markReview(address indexed subjectAddress, uint256 indexed reviewId, Mark mark); //1-like 0- dislike

	constructor() {
		createReview(0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5, 'asdfasdas', 6);
		createReview(0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5, 'asdfaadfasdfsdas', 4);
		createReview(0x5f1C8c8b1dA29424eFa85e059beC093Ee248f9C5, 'ASDDads', 6);
	}

	modifier isNotLikedReview(address subjectAddress, uint256 reviewId) {
		bool flag = false;
		for (uint256 i = 0; i < reveiws[subjectAddress][reviewId].likes.length; i++) {
			if (msg.sender == reveiws[subjectAddress][reviewId].likes[i]) {
				flag = true;
				break;
			}
		}
		require(flag == false, 'You are already liked this Review');
		_;
	}

	modifier isNotDislikedReview(address subjectAddress, uint256 reviewId) {
		bool flag = false;
		for (uint256 i = 0; i < reveiws[subjectAddress][reviewId].dislikes.length; i++) {
			if (msg.sender == reveiws[subjectAddress][reviewId].dislikes[i]) {
				flag = true;
				break;
			}
		}
		require(flag == false, 'You are already disliked this Review');
		_;
	}

	function getReviews(address subjectAddress) external view returns (Review[] memory) {
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
			Review(countReview, text, subjectAddress, mark, zeroAddress, zeroAddress)
		);
		emit newReview(subjectAddress, countReview);
	}
}

contract Comments is Users {
	struct Comment {
		uint256 id;
		uint256 reviewId;
		string text;
		address subjectAddress;
	}

	mapping(address => mapping(uint256 => Comment[])) public comments;

	event newComment(address indexed subjectAddress, uint256 indexed reviewId, uint256 idComment);

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
		comments[subjectAddress][reviewId].push(Comment(commentCount, reviewId, text, subjectAddress));
		emit newComment(subjectAddress, reviewId, commentCount);
	}
}

contract Fish is Users, Shops, Requests, Reviews, Comments {
	constructor() {}
}
