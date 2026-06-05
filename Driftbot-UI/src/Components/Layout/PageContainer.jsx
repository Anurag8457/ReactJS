import { Box, Typography } from "@mui/material";

export default function PageContainer({
  title,
  subtitle,
  children,
}) {
  return (
    <Box sx={{p:6}}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={1}
      >
        {title}
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        {subtitle}
      </Typography>

      {children}
    </Box>
  );
}