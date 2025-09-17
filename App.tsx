import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import StlPage from './pages/StlPage';
import PlyPage from './pages/PlyPage';
import ObjPage from './pages/ObjPage';
import AxialView from './pages/AxialView';
import SagittalView from './pages/SagittalView';
import CoronalView from './pages/CoronalView';

export default function App() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const threeD = [
    { title: 'STL Viewer', component: <StlPage />, color: '#38bdf8' },
    { title: 'PLY Viewer', component: <PlyPage />, color: '#38bdf8' },
    { title: 'OBJ Viewer', component: <ObjPage />, color: '#38bdf8' },
  ];

  const medical = [
    { title: 'Axial View', component: <AxialView />, color: '#38bdf8' },
    { title: 'Sagittal View', component: <SagittalView />, color: '#38bdf8' },
    { title: 'Coronal View', component: <CoronalView />, color: '#38bdf8' },
  ];

  const renderCard = (card: any, index: number, isLandscape: boolean) => (
    <View
      key={index}
      style={[styles.card, isLandscape ? styles.landscapeCard : null]}
    >
      <Text style={[styles.cardTitle, { color: card.color }]}>
        {card.title}
      </Text>
      <View style={styles.viewerBox}>{card.component}</View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.header}>DICOM & 3D Model Viewer</Text>

      <ScrollView
        contentContainerStyle={[
          styles.viewerContainer,
          isLandscape ? styles.landscape : styles.portrait,
        ]}
      >
        {isLandscape ? (
          <>
            <View style={styles.row}>
              {threeD.map((card, i) => renderCard(card, i, true))}
            </View>
            <View style={styles.row}>
              {medical.map((card, i) => renderCard(card, i + 3, true))}
            </View>
          </>
        ) : (
          <>
            {threeD.map((card, i) => renderCard(card, i, false))}
            {medical.map((card, i) => renderCard(card, i + 3, false))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // deep navy background
    paddingTop: 20,
  },
  header: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    color: '#38bdf8',
  },
  viewerContainer: {
    flexGrow: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  portrait: {
    flexDirection: 'column', // stacked list
  },
  landscape: {
    flexDirection: 'column', // two rows
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    minHeight: 160,
    marginVertical: 8,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  landscapeCard: {
    flex: 1,
    marginHorizontal: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  viewerBox: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
