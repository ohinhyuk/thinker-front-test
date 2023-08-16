import { Box, Typography } from '@mui/material';
import Sidebar from '../../components/profile/Sidebar';
import Image from 'next/image';
import FlexAlignBox from '../../components/common/FlexAlignBox';
export default function profile() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'success.darker',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '100px',
      }}
    >
      <Sidebar />
      <Box sx={{ display: 'flex', flexDirection: ' column', gap: '40px' }}>
        <Image
          src={`/assets/images/profile/profileLock.png`}
          width={200}
          height={250}
          alt="빈 프로필 큰 사진"
        />
        <FlexAlignBox>
          <Image
            src={`/assets/images/profile/profileKey.png`}
            width={20}
            height={30}
            alt="빈 프로필 작은 사진"
          />
          <Typography sx={{ color: 'success.contrastText', ml: '20px', mt: '5px' }} variant="h6">
            마이페이지가 텅 비었어요
          </Typography>
        </FlexAlignBox>
      </Box>
    </Box>
  );
}
