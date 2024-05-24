import { Box, Typography } from "@mui/material";

interface InfoCardProps {
  icon: JSX.Element;
  title?: string;
  value?: string;
}

const InfoCard = ({ icon, title, value }: InfoCardProps) => {
  return (
    <Box display="flex" gap={2} alignItems="center">
      <div>{icon}</div>
      <Box>
        <strong>{title}</strong>
        <Typography variant="h5">{value}</Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
