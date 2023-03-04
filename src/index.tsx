import * as React from 'react'
import './styles.scss'

const Counter: React.FC<{
    className: string
}> = ({className }) => (
    <div className={`counter ${className}`}>
    </div>
)

export type ICounterProps = {
    className?: string
}

const App: React.FC<ICounterProps> = ({ className = '' }) => {
    return <Counter className={className}/>
}

export default App