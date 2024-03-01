import styles from './page.module.css'
import BasicTable from '@/components/propositionTable'
import { Button, Stack, Typography } from '@mui/material'
import MenuBox from '@/components/menuBox'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PropositionTable from '@/components/propositionTable';
import Opinion from '@/types/opinion';
import Proposition from '@/types/proposition';






export default function Home() {
  const propositions = require("../data/propositions.json") as Proposition[];
  const opinions = require("../data/opinions.json") as Opinion[];



  return (
    <main className={styles.main}>
      <Typography variant="h3" component="h1" textAlign={'center'} gutterBottom>
        Welcome to DemocracyHelper
      </Typography>
      <MenuBox>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          justifyContent="space-between"
          alignItems="stretch"
          flexWrap="wrap"
          >
          <div>
            <Button variant="outlined"><InfoOutlinedIcon/></Button>
          </div>
          <div>
            <Button variant="outlined"><AddCircleOutlineOutlinedIcon/></Button>
            <Button variant="outlined" disabled><DeleteOutlineOutlinedIcon/></Button>
          </div>
        </Stack>
      </MenuBox>
      <PropositionTable propositions={ propositions } opinions={ opinions}></PropositionTable>
    </main>
  )
}
