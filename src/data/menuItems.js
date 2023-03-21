import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";


export const menuItems = [
    {
        text: 'Dashboard',
        icon: <OtherHousesOutlinedIcon/>,
        path: '/',
    },
    {
        text: 'User list',
        icon: <PeopleOutlinedIcon/>,
        path: '*'
    },
    {
        text: 'Email',
        icon: <MailOutlineOutlinedIcon/>,
        path: '*'
    },
];

export const MegaMenu = [
    {
        text: 'Analytics',
        icon: <DonutSmallOutlinedIcon/>,
        path: '*'
    },
    {
        text: 'CRM',
        path: '/email',
        icon: <BubbleChartOutlinedIcon />
    },
    {
        text: 'Price list',
        path: '/email',
        icon: <DescriptionOutlinedIcon />
    },
    {
        text: 'Account setting',
        path: '/email',
        icon: <PermIdentityOutlinedIcon />
    },
    {
        text: 'Calendar',
        path: '/email',
        icon: <TodayOutlinedIcon />
    },
    {
        text: 'Invoice Add',
        path: '/email',
        icon: <InsertDriveFileOutlinedIcon />
    },
    {
        text: 'Pricing',
        path: '/email',
        icon: <MonetizationOnOutlinedIcon />
    },
    {
        text: 'User List',
        path: '/email',
        icon: <PeopleAltOutlinedIcon />
    },
]

export const accountMenu = [
    {
        text: 'Profile',
        icon: <PersonOutlineOutlinedIcon />,
        path: '/profile',
    },
    {
        text: 'Settings',
        icon: <SettingsOutlinedIcon />,
        path: '/',
    },
    {
        text: 'Pricing',
        icon: <CurrencyExchangeOutlinedIcon />,
        path: '/',
    },
    {
        text: 'FAQ',
        icon: <LiveHelpOutlinedIcon />,
        path: '/',
    },
]