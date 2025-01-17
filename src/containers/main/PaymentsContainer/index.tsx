import React from 'react';
import StreamManager from 'components/streaming/StreamManager';
import styles from './styles.module.scss';
import { StreamContainer } from '../StreamContainer';

interface IProps {}
export const PaymentsContainer: React.FC<IProps> = () => {
	return (
		<div className={styles.outer_container}>
			<div className={styles.payment_page}>
				<h2 style={{ color: 'lightblue', marginLeft: '20px', paddingTop: '10px' }}>Start a payment stream</h2>
				<StreamContainer />
				<StreamManager />
			</div>
		</div>
	);
};
