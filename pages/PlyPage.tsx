import { View, Text, StyleSheet } from 'react-native';
import { Box } from 'lucide-react-native';

export default function PlyPage() {
  return (
    <View style={styles.container}>
      <View style={styles.viewerBox}>
        <Box size={48} color="#38bdf8" />
        <Text style={styles.text}>PLY Viewer</Text>
        <Text style={styles.subText}>Your 3D PLY models will appear here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewerBox: {
    padding: 50,
    backgroundColor: '#0f172a',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    color: '#e2e8f0',
  },
  subText: {
    fontSize: 14,
    marginTop: 4,
    padding: 8,
    textAlign: 'center',
    color: '#94a3b8',
  },
});
